import { Container, Header, Diet, Avatar, Title, List } from './styles'
import { useEffect, useState } from 'react'

import { MealPercentageCard } from '@components/MealPercentageCard'
import { Button } from '@components/Button'
import { MealCard } from '@components/MealCard'
import { MealListTitle } from '@components/ MealListTitle'
import { useNavigation } from '@react-navigation/native'

import { getAllMealsDays as _getAllMealsDays } from '@storage/meals/getAllMealsDays'

import { MealDay } from '@interfaces/meal'

const mealsMock: MealDay[] = [
    {
        date: '12.08.22',
        meals: [
            {
                time: '20:00',
                name: 'X-tudo',
                description: 'xablau',
                isDiet: false
            },
            {
                time: '16:00',
                name: 'Whey protein com leite',
                description: 'xablau',
                isDiet: true
            },
            {
                time: '12:30',
                name: 'Salada cesar com frango grelhados',
                description: 'xablau',
                isDiet: true
            },
            {
                time: '09:30',
                name: 'Vitamina de banana com abacate',
                description: 'xablau',
                isDiet: true
            }
        ]
    },
    {
        date: '11.08.22',
        meals: [
            {
                time: '20:00',
                name: 'X-tudo',
                description: 'xablau',
                isDiet: false
            },
            {
                time: '16:00',
                name: 'Whey protein com leite',
                description: 'xablau',
                isDiet: true
            },
            {
                time: '12:30',
                name: 'Salada cesar com frango grelhado',
                description: 'xablau',
                isDiet: true
            },
            {
                time: '09:30',
                name: 'Vitamina de banana com abacate',
                description: 'xablau',
                isDiet: true
            }
        ]
    },
    {
        date: '10.08.22',
        meals: [
            {
                time: '20:00',
                name: 'X-tudo',
                description: 'xablau',
                isDiet: false
            },
            {
                time: '16:00',
                name: 'Whey protein com leite',
                description: 'xablau',
                isDiet: true
            },
            {
                time: '12:30',
                name: 'Salada cesar com frango grelhado',
                description: 'xablau',
                isDiet: true
            },
            {
                time: '09:30',
                name: 'Vitamina de banana com abacate',
                description: 'xablau',
                isDiet: true
            }
        ]
    }
]

export function Home() {
    const [mealsDays, setMealsDays] = useState<MealDay[]>([])
    const [percentageMealsWithinDiet, setPercentageMealsWithinDiet] = useState(0)

    const navigation = useNavigation()

    function openCreateMealMeal() {
        navigation.navigate('createMeal')
    }

    function openStatistics() {
        navigation.navigate('statistics', { mealsDays, percentageMealsWithinDiet })
    }

    type OpenMealParams = {
        date: string
        name: string
        description: string
        time: string
        withinTheDiet: boolean
    }

    function openMeal({ date, name, description, time, withinTheDiet }: OpenMealParams) {
        navigation.navigate('meal', { date, name, description, time, withinTheDiet })
    }

    function calculatePercentageMealsWithinDiet() {
        const { totalMeals, mealsWithinDiet } = mealsDays.reduce(
            (acc, day) => {
                acc.totalMeals += day.meals.length
                day.meals.forEach(meal => {
                    if (meal.isDiet) {
                        acc.mealsWithinDiet++
                    }
                })
                return acc
            },
            { totalMeals: 0, mealsWithinDiet: 0 }
        )

        if (totalMeals === 0) {
            setPercentageMealsWithinDiet(0)
            return
        }

        const percentage = (mealsWithinDiet / totalMeals) * 100
        setPercentageMealsWithinDiet(percentage)
    }

    async function getAllMealsDays() {
        const storedMealsDays = await _getAllMealsDays()
        setMealsDays(storedMealsDays)
    }

    useEffect(() => {
        (async () => {
            await getAllMealsDays()
        })()
    }, [])

    useEffect(() => {
        calculatePercentageMealsWithinDiet()
    }, [mealsDays])

    return (
        <Container>
            <Header>
                <Diet />
                <Avatar />
            </Header>

            <MealPercentageCard openStatistics={openStatistics} percentageMealsWithinDiet={percentageMealsWithinDiet} moveOn />

            <Title>
                Refeições
            </Title>

            <Button
                title='+ Nova refeição'
                onPress={openCreateMealMeal}
            />

            <List
                sections={mealsDays.map(m => ({ ...m, data: m.meals }))}
                keyExtractor={(item, index) => `${item.name}${index}`}
                renderItem={({ section, item }) => (
                    <MealCard
                        time={item.time}
                        title={item.name}
                        isDiet={item.isDiet}
                        openMeal={() => openMeal({
                            date: section.date,
                            name: item.name,
                            description: item.description,
                            time: item.time,
                            withinTheDiet: item.isDiet
                        })}
                    />
                )}
                renderSectionHeader={({ section: { date } }) => (
                    <MealListTitle date={date} />
                )}
            />
        </Container>
    )
}