import {
    Container,
    StatisticsContainer,
    ScreenTitle,
    CardLarge,
    CardsSmallWrapper,
    CardSmall,
    CardTitle,
    CardDescription
} from './styles'

import { MealPercentageCard } from '@components/MealPercentageCard'

export function Statistics() {
    return (
        <Container>
            <MealPercentageCard percentageOfMealsWithinTheDiet='90,86' isPercentageAboveIdeal />

            <StatisticsContainer>
                <ScreenTitle>
                    Estatísticas gerais
                </ScreenTitle>

                <CardLarge>
                    <CardTitle>
                        22
                    </CardTitle>

                    <CardDescription>
                        melhor sequência de pratos dentro da dieta
                    </CardDescription>
                </CardLarge>

                <CardLarge>
                    <CardTitle>
                        109
                    </CardTitle>

                    <CardDescription>
                        refeições registradas
                    </CardDescription>
                </CardLarge>

                <CardsSmallWrapper>
                    <CardSmall isGreen>
                        <CardTitle>
                            99
                        </CardTitle>

                        <CardDescription>
                            refeições dentro da dieta
                        </CardDescription>
                    </CardSmall>

                    <CardSmall isGreen={false}>
                        <CardTitle>
                            10
                        </CardTitle>

                        <CardDescription>
                            refeições fora da dieta
                        </CardDescription>
                    </CardSmall>
                </CardsSmallWrapper>
            </StatisticsContainer>
        </Container >
    )
}