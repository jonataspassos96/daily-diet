import { Container, Title, Subtitle, ArrowUpRightIcon, ArrowLeftIcon } from './styles'

type Props = {
    percentageOfMealsWithinTheDiet: string,
    moveOn?: boolean,
    isPercentageAboveIdeal?: boolean
}

export function MealPercentageCard({ percentageOfMealsWithinTheDiet, moveOn = false, isPercentageAboveIdeal = false }: Props) {
    return (
        <Container isPercentageAboveIdeal={isPercentageAboveIdeal}>
            <Title>
                {percentageOfMealsWithinTheDiet}%
            </Title>
            {
                moveOn
                    ? <ArrowUpRightIcon isPercentageAboveIdeal={isPercentageAboveIdeal} />
                    : <ArrowLeftIcon isPercentageAboveIdeal={isPercentageAboveIdeal} />
            }
            <Subtitle>
                das refeições dentro da dieta
            </Subtitle>
        </Container>
    )
}