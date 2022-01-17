import styled from 'styled-components'
import { Dimensions, Platform } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const wView = width / 2
const hView = height / 2

export const Container = styled.View`
    width: ${width}px;
    height: ${height}px;
    background-color: #f1f1f1;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-family:"coffee+tea demo";
    margin-bottom: 20px;
    text-align: center;
`;

export const CardInfo = styled.View`
    height: 300px;
    background-color: #fff;
    padding: 15px;
    border-radius: 15px;
`

export const TitleBarber = styled.Text`
    font-size: 20px;
    font-family:"coffee+tea demo";
    margin-bottom: 5px;
`

export const SubTitle = styled.Text`
    font-size: 15px;
    font-family:"coffee+tea demo";
    margin-bottom: 5px;
`
