import { Button } from '@components/Button'
import { Container, Title, Subtitle, Image } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'

type RouteParams = {
    isDiet: boolean
}

export function Feedback() {
    const navigation = useNavigation()
    const route = useRoute()
    const { isDiet } = route.params as RouteParams

    function handleOpenHome() {
        navigation.navigate('home')
    }

    return (
        <Container>
            <Title isDiet={isDiet}>
                {
                    isDiet
                        ? 'Continue assim!'
                        : 'Que pena!'
                }
            </Title>

            <Subtitle>
                {
                    isDiet
                        ? 'Você continua dentro da dieta. Muito bem!'
                        : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'
                }
            </Subtitle>

            <Image isDiet={isDiet} />

            <Button title='Ir para a página inicial' onPress={handleOpenHome} />
        </Container>
    )
}