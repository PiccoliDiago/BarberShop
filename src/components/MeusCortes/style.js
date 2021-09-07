import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Container = styled.View`
    width: 100%;
    height: 100%;
    position: relative;
`
export const Row = styled.View`
    height: 1px;
    background-color: #222;
`

export const ViewImageProfile = styled.View`
    display: flex;
    flex-direction:row; 
`

export const ImageProfile = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 100px;   
`

export const ViewDetailsProfile = styled.View`
    flex: 1;
    padding-right: 20px;
    justify-content: center;
`

export const TextNameProfile = styled.Text`
    font-family: "coffee+tea demo";
    font-size: 25px; 
    letter-spacing: 1.5px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
`

export const TextAgendamentos = styled.Text`
    font-family: "coffee+tea demo";
    font-size: 18px; 
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
    margin-top: 5px;
    letter-spacing: 1.5px;
`

export const Legend = styled.View`
    display: flex;
    flex-direction: row;
    height: 20px;
    border: 2px solid #f7e7d7;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
`

export const Ball = styled.View`
    height: 5px;
    width: 5px;
    border-radius: 100px; 
    margin-top: 5px;
`

export const TextBall = styled.Text`
    font-size: 12px;
    color: #222;
    margin-left: 5px;
`

export const ViewDetailsService = styled.View`
    height: 45px;
    display: flex;
    flex-direction: row; 
`

export const TextDetail = styled.Text`
    font-size: 20px;
    margin: 15px 0 0 15px;
    font-family: "coffee+tea demo";
    letter-spacing: 1.5px;
`

export const TextDetailDate = styled.Text`
    position: absolute;
    color: #000;
    font-size: 12px;
    bottom: 5px;
    right: 5px;
`

export const BallCancel = styled.View`
    position: absolute;
    top: 10px;
    right: 10px;
    height: 5px;
    width: 5px;
    border-radius: 100px; 
    background-color: #ff0000;
`
