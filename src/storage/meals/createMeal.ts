import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEALS_COLLECTION } from '@storage/storageConfig'
import { getAllMealsDays } from './getAllMealsDays'

import { MealDay, Meal } from '@interfaces/meal'

type Props = {
    name: string
    description: string
    date: string
    time: string
    isDiet: boolean
}

export async function createMeal({ name, description, date, time, isDiet }: Props) {
    try {
        const storedMealsDays = await getAllMealsDays()

        const newMeal: Meal = {
            name,
            description,
            time,
            isDiet
        }

        let filteredMealDay: MealDay | undefined = storedMealsDays.find(mealDay => mealDay.date === date)

        if (filteredMealDay === undefined) {
            const newFilteredMealDay: MealDay = {
                date,
                meals: [newMeal]
            }

            storedMealsDays.push(newFilteredMealDay)
        } else {
            filteredMealDay.meals.push(newMeal)
        }

        let storage = JSON.stringify(storedMealsDays)
        await AsyncStorage.setItem(MEALS_COLLECTION, storage)
    } catch (error) {
        throw error
    }
}