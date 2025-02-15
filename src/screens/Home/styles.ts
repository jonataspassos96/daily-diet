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

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 66px;
`

export const Diet = styled.Image.attrs(() => ({
    source: require('../../assets/Logo.png'),
}))`
    width: 82;
    height: 37;
`

export const Avatar = styled.Image.attrs(() => ({
    source: require('../../assets/Avatar.png'),
}))`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid black;
`

export const Title = styled.Text`
    margin-top: 36px;
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
`

export const List = styled.SectionList<SectionListProps<MealData, Meal>>`
    margin-top: 30px;
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