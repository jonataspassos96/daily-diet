import { Container, Wrapper, Time, LineVerticalIcon, Title, Circle } from './styles'

type Props = {
    time: string,
    title: string,
    isCompleted: boolean,
    isLast?: boolean
}

export function MealCard({ time, title, isCompleted, isLast }: Props) {
    return (
        <Container isCompleted={isCompleted} isLast={isLast}>
            <Wrapper>
                <Time>
                    {time}
                </Time>

                <LineVerticalIcon />

                <Title>
                    {title}
                </Title>
            </Wrapper>

            <Circle isCompleted={isCompleted} />
        </Container>
    )
}