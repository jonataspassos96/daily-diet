export type MealDay = {
    date: string;
    meals: Meal[];
}

export type Meal = {
    name: string;
    description: string;
    time: string;
    isDiet: boolean;
}