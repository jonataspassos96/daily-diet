import styled from 'styled-components/native'

export const Container = styled.View`
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