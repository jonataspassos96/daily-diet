import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEALS_COLLECTION } from '@storage/storageConfig'

import { MealDay } from '@interfaces/meal'

export async function deleteMeal(date: string, name: string) {
    try {
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION)

        const meals: MealDay[] = storage ? JSON.parse(storage) : []

        const mealIndex = meals.findIndex(m => m.date === date)

        if (mealIndex !== -1) {
            const mealDay = meals[mealIndex]

            const filteredMealsInDay = mealDay.meals.filter(m => m.name !== name)

            if (filteredMealsInDay.length !== mealDay.meals.length) {
                meals[mealIndex].meals = filteredMealsInDay

                if (meals[mealIndex].meals.length === 0) {
                    meals.splice(mealIndex, 1)
                }

                await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(meals))
            }
        }

        return meals
    } catch (error) {
        throw error
    }
}