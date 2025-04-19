import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEALS_COLLECTION } from '@storage/storageConfig'

import { MealDay } from '@interfaces/meal'

export async function getAllMealsDays() {
    try {
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION)

        const meals: MealDay[] = storage ? JSON.parse(storage) : []

        return meals
    } catch (error) {
        throw error
    }
}