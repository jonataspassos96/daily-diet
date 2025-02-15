import styled from 'styled-components/native'

type Props = {
    isFirst?: boolean
}

export const Container = styled.View<Props>`
    width: 100%;
    margin-top: ${({ isFirst }) => isFirst ? '8px' : '24px'};
    margin-bottom: 12px;
    margin-left: 6px;
`

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XG};
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-weight: 900;
`