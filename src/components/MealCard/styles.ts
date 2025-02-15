import styled from 'styled-components/native'
import { LineVertical } from 'phosphor-react-native'

type Props = {
    isCompleted: boolean,
    isLast?: boolean
}

export const Container = styled.View<Props>`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: ${({ isLast }) => isLast ? '40px' : '8px'};
    padding: 14px 16px 14px 12px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
    max-width: 75%;
`

export const Time = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
    font-weight: 600;
`

export const LineVerticalIcon = styled(LineVertical).attrs(({ theme }) => ({
    size: theme.FONT_SIZE.XG,
    color: theme.COLORS.GRAY_400,
}))``

export const Title = styled.Text.attrs(() => ({
    numberOfLines: 1,
    ellipsizeMode: 'clip'
}))`
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
    margin-right: 10px;
`

export const Circle = styled.View<Props>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme, isCompleted }) => isCompleted ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_MID};
`