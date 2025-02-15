import { Container, Title, List, Meal } from './styles'
import { useState } from 'react'

import { Header } from '@components/Header'
import { MealPercentageCard } from '@components/MealPercentageCard'
import { Button } from '@components/Button'
import { MealCard } from '@components/MealCard'
import { MealListTitle } from '@components/ MealListTitle'

const mealsMock: Meal[] = [
    {
        title: '12.08.22',
        isFirst: true,
        data: [
            {
                time: '20:00',
                name: 'X-tudo',
                isCompleted: false
            },
            {
                time: '16:00',
                name: 'Whey protein com leite',
                isCompleted: true
            },
            {
                time: '12:30',
                name: 'Salada cesar com frango grelhados',
                isCompleted: true
            },
            {
                time: '09:30',
                name: 'Vitamina de banana com abacate',
                isCompleted: true
            }
        ]
    },
    {
        title: '11.08.22',
        data: [
            {
                time: '20:00',
                name: 'X-tudo',
                isCompleted: false
            },
            {
                time: '16:00',
                name: 'Whey protein com leite',
                isCompleted: true
            },
            {
                time: '12:30',
                name: 'Salada cesar com frango grelhado',
                isCompleted: true
            },
            {
                time: '09:30',
                name: 'Vitamina de banana com abacate',
                isCompleted: true
            }
        ]
    },
    {
        title: '10.08.22',
        data: [
            {
                time: '20:00',
                name: 'X-tudo',
                isCompleted: false
            },
            {
                time: '16:00',
                name: 'Whey protein com leite',
                isCompleted: true
            },
            {
                time: '12:30',
                name: 'Salada cesar com frango grelhado',
                isCompleted: true
            },
            {
                time: '09:30',
                name: 'Vitamina de banana com abacate',
                isCompleted: true,
                isLast: true,
            }
        ]
    }
]

export function Home() {
    const [meals, setMeals] = useState(mealsMock)

    return (
        <Container>
            <Header />
            <MealPercentageCard percentageOfMealsWithinTheDiet='90,86' />
            <Title>
                Refeições
            </Title>
            <Button title='+ Nova refeição' />
            <List
                sections={meals}
                keyExtractor={(item, index) => `${item.name}${index}`}
                renderItem={({ item }) => (
                    <MealCard time={item.time} title={item.name} isCompleted={item.isCompleted} isLast={item.isLast} />
                )}
                renderSectionHeader={({ section: { title, isFirst } }) => (
                    <MealListTitle title={title} isFirst={isFirst} />
                )}
            />
        </Container>
    )
}