import { Container, Title } from './styles'

type Props = {
    title: string,
    isFirst?: boolean
}

export function MealListTitle({ title, isFirst }: Props) {
    return (
        <Container isFirst={isFirst}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}