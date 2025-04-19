import { Container, Wrapper, Time, LineVerticalIcon, Title, Circle } from './styles'

type Props = {
    time: string,
    title: string,
    isDiet: boolean
}

export function MealCard({ time, title, isDiet }: Props) {
    return (
        <Container isDiet={isDiet}>
            <Wrapper>
                <Time>
                    {time}
                </Time>

                <LineVerticalIcon />

                <Title>
                    {title}
                </Title>
            </Wrapper>

            <Circle isDiet={isDiet} />
        </Container>
    )
}