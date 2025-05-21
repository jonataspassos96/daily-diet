import { Container, Wrapper, Time, LineVerticalIcon, Title, Circle } from './styles'

type Props = {
    time: string,
    title: string,
    isDiet: boolean,
    openMeal: () => void
}

export function MealCard({ time, title, isDiet, openMeal }: Props) {
    return (
        <Container isDiet={isDiet}>
            <Wrapper onPress={openMeal}>
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