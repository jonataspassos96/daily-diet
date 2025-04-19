import { useNavigation } from '@react-navigation/native'

import {
    Container,
    Title,
    Subtitle,
    WrapperArrowUpRightIcon,
    ArrowUpRightIcon,
    WrapperArrowLeftIcon,
    ArrowLeftIcon
} from './styles'

type Props = {
    openStatistics?: () => void,
    percentageMealsWithinDiet: number,
    moveOn?: boolean
}

export function MealPercentageCard({ openStatistics, percentageMealsWithinDiet, moveOn = false }: Props) {
    const navigation = useNavigation()

    function handlePreviousScreen() {
        navigation.goBack()
    }

    function percentageIsAboveIdeal() {
        return percentageMealsWithinDiet > 50
    }

    return (
        <Container percentageIsAboveIdeal={percentageIsAboveIdeal}>
            <Title>
                {percentageMealsWithinDiet.toFixed(2)}%
            </Title>
            {
                moveOn
                    ? <WrapperArrowUpRightIcon onPress={openStatistics}><ArrowUpRightIcon percentageIsAboveIdeal={percentageIsAboveIdeal} /></WrapperArrowUpRightIcon>
                    : <WrapperArrowLeftIcon onPress={handlePreviousScreen}><ArrowLeftIcon percentageIsAboveIdeal={percentageIsAboveIdeal} /></WrapperArrowLeftIcon>
            }
            <Subtitle>
                das refeições dentro da dieta
            </Subtitle>
        </Container>
    )
}