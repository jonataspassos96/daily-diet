import styled from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'

export type HeaderTypeStyledProps = 'GRAY' | 'GREEN' | 'RED'

interface Props {
    color: HeaderTypeStyledProps;
}

export const Container = styled.View<Props>`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    padding-top: 22px;
    padding-bottom: 22px;
    background-color: ${({ theme, color }) => {
        switch (color) {
            case 'GRAY':
                return theme.COLORS.GRAY_300;
            case 'GREEN':
                return theme.COLORS.GREEN_LIGHT;
            case 'RED':
                return theme.COLORS.RED_LIGHT;
            default:
                return theme.COLORS.GRAY_300;
        }
    }};
`

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XG};
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-weight: bold;
`

export const ArrowLeftIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_700,
}))`
    position: absolute;
    right: 345;
    font-weight: bold;
`