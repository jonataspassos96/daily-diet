import { useEffect, useState } from 'react'

import { MealDay } from '@interfaces/meal'

import { useNavigation, useRoute } from '@react-navigation/native'

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

type RouteParams = {
    mealsDays: MealDay[]
    percentageMealsWithinDiet: number
}

export function Statistics() {
    const [bestSequenceMealsWithinDiet, setBestSequenceMealsWithinDiet] = useState(0)
    const [totalMeals, setTotalMeals] = useState(0)
    const [mealsWithinDiet, setMealsWithinDiet] = useState(0)
    const [offDietMeals, setOffDietMeals] = useState(0)

    const navigation = useNavigation()
    const route = useRoute()
    const { mealsDays, percentageMealsWithinDiet } = route.params as RouteParams

    function calculateGeneralStatistics() {
        let currentSequence = 0
        let bestSequence = 0
        const { totalMeals, mealsWithinDiet, offDietMeals } = mealsDays.reduce(
            (acc, day) => {
                acc.totalMeals += day.meals.length
                day.meals.forEach(meal => {
                    if (meal.isDiet) {
                        acc.mealsWithinDiet++
                        currentSequence++

                        if (bestSequence < currentSequence) {
                            bestSequence = currentSequence
                        }
                    } else {
                        acc.offDietMeals++
                        currentSequence = 0
                    }
                })

                return acc
            },
            { totalMeals: 0, mealsWithinDiet: 0, offDietMeals: 0 }
        )

        setTotalMeals(totalMeals)
        setMealsWithinDiet(mealsWithinDiet)
        setOffDietMeals(offDietMeals)
        setBestSequenceMealsWithinDiet(bestSequence)
    }

    useEffect(() => {
        calculateGeneralStatistics()
    }, [])

    return (
        <Container>
            <MealPercentageCard percentageMealsWithinDiet={percentageMealsWithinDiet} />

            <StatisticsContainer>
                <ScreenTitle>
                    Estatísticas gerais
                </ScreenTitle>

                <CardLarge>
                    <CardTitle>
                        {bestSequenceMealsWithinDiet}
                    </CardTitle>

                    <CardDescription>
                        melhor sequência de pratos dentro da dieta
                    </CardDescription>
                </CardLarge>

                <CardLarge>
                    <CardTitle>
                        {totalMeals}
                    </CardTitle>

                    <CardDescription>
                        refeições registradas
                    </CardDescription>
                </CardLarge>

                <CardsSmallWrapper>
                    <CardSmall isGreen>
                        <CardTitle>
                            {mealsWithinDiet}
                        </CardTitle>

                        <CardDescription>
                            refeições dentro da dieta
                        </CardDescription>
                    </CardSmall>

                    <CardSmall isGreen={false}>
                        <CardTitle>
                            {offDietMeals}
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