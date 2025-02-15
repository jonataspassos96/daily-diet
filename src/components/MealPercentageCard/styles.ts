import styled from 'styled-components/native'
import { ArrowUpRight, ArrowLeft } from 'phosphor-react-native'

type MealPercentageCardStyledProps = {
    isPercentageAboveIdeal: boolean
}

export const Container = styled.View<MealPercentageCardStyledProps>`
    width: 100%;
    align-items: center;
    margin-top: 36px;
    background-color: ${({ theme, isPercentageAboveIdeal }) => isPercentageAboveIdeal ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
    position: relative;
`

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXG};
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    margin-top: 24px;
    font-weight: bold;
`

export const Subtitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.M};
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    margin-bottom: 16px;
`

export const ArrowUpRightIcon = styled(ArrowUpRight).attrs<MealPercentageCardStyledProps>(({ theme, isPercentageAboveIdeal }) => ({
    size: 34,
    color: isPercentageAboveIdeal ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
    position: absolute;
    bottom: 60;
    right: 5;
`

export const ArrowLeftIcon = styled(ArrowLeft).attrs<MealPercentageCardStyledProps>(({ theme, isPercentageAboveIdeal }) => ({
    size: 34,
    color: isPercentageAboveIdeal ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
    position: absolute;
    bottom: 60;
    right: 335;
`