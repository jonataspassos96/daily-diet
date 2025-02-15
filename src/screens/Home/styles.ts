import styled from 'styled-components/native'
import { SectionListProps } from 'react-native'

export type Meal = {
    title: string,
    isFirst?: boolean,
    data: MealData[]
}

export type MealData = {
    time: string,
    name: string,
    isCompleted: boolean,
    isLast?: true
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-left: 24px;
    margin-right: 24px;
`

export const Title = styled.Text`
    margin-top: 36px;
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
`

export const List = styled.SectionList<SectionListProps<MealData, Meal>>`
    margin-top: 30px;
    /* background-color: ${({ theme }) => theme.COLORS.GRAY_150}; */
    padding: 5px;
    border-radius: 10px;
`

export const CheckWrapper = styled.View`
    flex: 1;
    justify-content: center;
    background-color: green;
`

export const TrashWrapper = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: center;
    background-color: red;
    padding-right: 20px;
`