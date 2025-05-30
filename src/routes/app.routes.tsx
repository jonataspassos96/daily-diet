import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Feedback } from '@screens/Feedback'
import { CreateMeal } from '@screens/ CreateMeal'
import { Statistics } from '@screens/Statistics'
import { Meal } from '@screens/Meal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='home'
                component={Home}
            />

            <Screen
                name='feedback'
                component={Feedback}
            />

            <Screen
                name='createMeal'
                component={CreateMeal}
            />

            <Screen
                name='statistics'
                component={Statistics}
            />

            <Screen
                name='meal'
                component={Meal}
            />
        </Navigator>
    )
}