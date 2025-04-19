import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    margin-bottom: 12px;
    margin-left: 6px;
`

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XG};
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-weight: 900;
`