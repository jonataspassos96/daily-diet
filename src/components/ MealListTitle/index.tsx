import { Container, Title } from './styles'

type Props = {
    date: string
}

export function MealListTitle({ date }: Props) {
    return (
        <Container>
            <Title>
                {date}
            </Title>
        </Container>
    )
}