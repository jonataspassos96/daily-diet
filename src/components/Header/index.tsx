import { useNavigation } from '@react-navigation/native'

import { HeaderTypeStyledProps, Container, Title, Button, ArrowLeftIcon } from './styles'

type Props = {
    color: HeaderTypeStyledProps
}

export function Header(props: Props) {
    const navigation = useNavigation()

    function handlePreviousScreen() {
        navigation.goBack()
    }

    return (
        <Container {...props}>
            <Button onPress={handlePreviousScreen}>
                <ArrowLeftIcon />
            </Button>

            <Title>
                Nova refeição
            </Title>
        </Container>
    )
}