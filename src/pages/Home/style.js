import styled from 'styled-components'
import { Dimensions, Platform } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const wView = width / 2
const hView = height / 2

export const Container = styled.View`
    width: ${width}px;
    height: ${height}px;
`;

export const Opacity = styled.View`
    position: absolute;
        height: 100%;
        width: 100%;
        z-index: 2;
        background-color: #000;
        opacity: 0.5;
`;

export const ImageFundo = styled.Image`
    width: ${width}px;
    height: ${width / 1.5}px;
`;

export const ImageRow = styled.Image`
    width: ${width}px;
    height: 5px;
`;

export const ViewLogo = styled.View`
    width: ${wView / 1.5}px;
    height: ${wView / 1.5}px;
    background-color: #f7e7d7;
    border-radius: 500px;
    border: 3px solid #f1f1f1;
    position: absolute;
    left: ${(width / 2 - (wView / 3))}px;
    top: ${(width / 1.5 - (wView / 3))}px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    overflow: hidden;
    z-index: 1;
`;

export const ImageLogo = styled.Image`
    width: ${wView / 1.1}px;
    height: ${wView / 1.1}px; 
    left: 5px;
    top: -35px;
    align-self: center;
    justify-content: center;
`;

export const ImagePixel = styled.Image`
    position: absolute;
    bottom: 0;
    height: 100px;
    z-index: 1;
    width: 150px;
    left: ${(width / 2) - 75}px;
`;

export const ButtonMenu = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: #f5ddc6;
    border: 2px solid #fff;
    overflow: hidden;
    margin-top: 15px;
`;

export const ImageRowInfo = styled.Image`
    height: 6.5px;
    position: absolute;
    top: -3px;
    left: -58px;
    width: 120px;
    transform: rotate(90deg);
`;

export const TextInfo = styled.Text`
    padding: 13px 0 0 20px;
    font-size: 25px;
    color: #000;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
    font-family:"coffee+tea demo";
    letter-spacing: 1.5px;
`;

export const CloseMap = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    background-color: #0b929e;
    position: absolute;
    top: 50px;
    right: 15px;
    border-radius: 5px;
    justify-content: center;
`;

export const TextClose = styled.Text`
    color: #f7e7d7;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;