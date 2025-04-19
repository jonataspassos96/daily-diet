import { TouchableOpacity } from 'react-native'

import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
    width: 100%;
    align-items: center;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    margin-top: 8px;
    margin-bottom: 8px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: bold;
    font-size: ${({ theme }) => theme.FONT_SIZE.M};
    margin-top: 12px;
    margin-bottom: 12px;
`