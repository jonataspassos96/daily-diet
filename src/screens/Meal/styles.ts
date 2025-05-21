import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
    withinTheDiet: boolean
}

export const Container = styled(SafeAreaView) <Props>`
    flex: 1;
    background-color: ${({ theme, withinTheDiet }) => withinTheDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Wrapper = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const ContentWrapper = styled.View`
    margin-top: 36px;
    padding-left: 24px;
    padding-right: 24px;
`

export const ButtonWrapper = styled.View`
    margin-bottom: 36px;
    padding-left: 24px;
    padding-right: 24px;
`

export const MealTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
    font-weight: 700;
`

export const MealDescription = styled.Text`
    margin-top: 6px;
    font-size: ${({ theme }) => theme.FONT_SIZE.M};
`

export const DateAndTimeTitle = styled.Text`
    margin-top: 24px;
    font-size: ${({ theme }) => theme.FONT_SIZE.M};
    font-weight: 700;
`

export const DateAndTimeOfMeal = styled.Text`
    margin-top: 6px;
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
`

export const Pill = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 15%;
    width: 50%
`

export const PillCircle = styled.View<Props>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme, withinTheDiet }) => withinTheDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const PillTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-weight: 700;
    margin-left: 6px;
`