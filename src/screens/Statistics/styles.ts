import styled from 'styled-components/native'

type StatisticsCardSmollStyledProps = {
    isGreen: boolean
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const StatisticsContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 20px;
    padding-left: 24px;
    padding-right: 24px;
`

export const ScreenTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    text-align: center;
    margin-top: 36px;
    margin-bottom: 4px;
    font-weight: 800;
`

export const CardLarge = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 8px;
    padding: 24px;
    margin-top: 12px;
`

export const CardsSmallWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
`

export const CardSmall = styled.View<StatisticsCardSmollStyledProps>`
    width: 48%;
    background-color: ${({ theme, isGreen }) => isGreen ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
    padding: 20px;
    margin-top: 4px;
`

export const CardTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XXG};
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    text-align: center;
    font-weight: 900;
`

export const CardDescription = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.M};
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    margin-top: 12px;
    text-align: center;
    font-weight: 500;
`