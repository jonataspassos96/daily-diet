import { useNavigation } from '@react-navigation/native'

import { HeaderTypeStyledProps, Container, Title, Button, ArrowLeftIcon } from './styles'

type Props = {
    color: HeaderTypeStyledProps
    title: string
}

export function Header({ color, title }: Props) {
    const navigation = useNavigation()

    function handlePreviousScreen() {
        navigation.goBack()
    }

    return (
        <Container color={color}>
            <Button onPress={handlePreviousScreen}>
                <ArrowLeftIcon />
            </Button>

            <Title>
                {title}
            </Title>
        </Container>
    )
}