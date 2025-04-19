import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export type AreYouOnADietCircleButtonButtonStyledProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type?: AreYouOnADietCircleButtonButtonStyledProps
    isSelected?: boolean
    isYesButton?: boolean
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    border-radius: 20px;
`

export const NameWrapper = styled.View`
    width: 100%;
    margin-top: 24px;
`

export const NameTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-weight: 700;
`

export const NameInput = styled.TextInput`
    margin-top: 4px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 6px;
`

export const DescriptionWrapper = styled.View`
    width: 100%;
    margin-top: 24px;
`

export const DescriptionTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-weight: 700;
`

export const DescriptionInput = styled.TextInput`
    margin-top: 4px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 6px;
    height: 138px;
`

export const DateAndTimeWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 24px;
`

export const DateWrapper = styled.View`
    width: 48%;
`

export const DateTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-weight: 700;
`

export const DateInput = styled.TextInput`
    margin-top: 4px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 6px;
`

export const TimeWrapper = styled.View`
    width: 48%;
`

export const TimeTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-weight: 700;
`

export const TimeInput = styled.TextInput`
    margin-top: 4px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 6px;
`

export const AreYouOnADietWrapper = styled.View`
    width: 100%;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 160px;
`

export const AreYouOnADietTitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-weight: 700;
`

export const ButtonWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 4px;
`

export const ButtonForm = styled(TouchableOpacity) <Props>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 48%;
    border-radius: 6px;
    background-color: ${({ theme, isSelected, isYesButton }) => {
        if (isSelected) {
            return isYesButton ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT;
        }
        return theme.COLORS.GRAY_200;
    }};
    padding-top: 16px;
    padding-bottom: 16px;
`

export const CircleButton = styled.View<Props>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const TitleButton = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-weight: 700;
    margin-left: 6px;
`