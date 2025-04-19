import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
    isDiet: boolean
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    justify-content: center;
    align-items: center;
    padding-left: 32px;
    padding-right: 32px;
`

export const Title = styled.Text<Props>`
    font-size: ${({ theme }) => theme.FONT_SIZE.XXG};
    color: ${({ theme, isDiet }) => isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    text-align: center;
`

export const Subtitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.G};
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    text-align: center;
    margin-top: 12px;
`

export const Image = styled.Image.attrs<Props>(({ isDiet }) => ({
    source: isDiet ? require('../../assets/SuccessfulRegistration.png') : require('../../assets/FailedRegistration.png')
}))`
    margin-top: 24px;
    margin-bottom: 24px;
`