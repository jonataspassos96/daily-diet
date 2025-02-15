import { Container, Title, Subtitle, ArrowIcon } from './styles'

type Props = {
    percentageOfMealsWithinTheDiet: string
}

export function MealPercentageCard({ percentageOfMealsWithinTheDiet }: Props) {
    return (
        <Container>
            <Title>
                {percentageOfMealsWithinTheDiet}%
            </Title>
            <ArrowIcon />
            <Subtitle>
                das refeições dentro da dieta
            </Subtitle>
        </Container>
    )
}