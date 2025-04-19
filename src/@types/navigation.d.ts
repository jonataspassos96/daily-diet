import { MealDay } from "@interfaces/meal";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            feedback: {
                isDiet: boolean;
            };
            createMeal: undefined;
            statistics: {
                mealsDays: MealDay[];
                percentageMealsWithinDiet: number;
            }
        }
    }
}