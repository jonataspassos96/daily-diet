import styled from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'

export const Container = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 36px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
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

export const ArrowIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 36,
    color: theme.COLORS.GREEN_DARK,
}))`
    position: absolute;
    bottom: 60;
    right: 5;
`