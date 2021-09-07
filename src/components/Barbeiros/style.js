import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Container = styled.View`
    width: 100%;
    height: 100%;
    position: relative;
`

export const ViewBarber = styled.TouchableOpacity`
    height: 95px;
    width: 105px;
    border-radius: 5px;
    display: flex; 
    padding: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 2px dotted #0b929e; */
`;

export const FundoImageBarber = styled.View`
    height:80px;
    width: 80px;
    border: 2px solid #0b929e;
    border-radius: 100px;
    overflow: hidden;
`;

export const ImageBarber = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 100px;
`;

export const TextBarber = styled.Text`
    text-align: right; 
    margin-top: 5px;
    font-size: 15px;
`;

export const TextTitle = styled.Text`
    font-size: 25px;
    font-family: "coffee+tea demo";
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
    letter-spacing: 1.5px;
`;

export const ViewStar = styled.View`
    height: 50px;
    border: 2px solid #f7e7d7;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    display: flex;
    flex-direction: row;
`;

export const ImageStar = styled.Image`
    height: 25px;
    width: 25px;
    margin-top: 10px;
`;

export const TextStar = styled.Text`
    margin: 10px 0 0 10px;
    font-size: 20px;
    font-weight: bold;
`;

export const ViewCompliments = styled.View`
    display: flex;
    flex-direction: row;
    border: 2px solid #f7e7d7;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
`;

export const ViewCompliment = styled.View`
    height: 80px;
    width: ${(width / 4 - 20)}px;
    position: relative;
    margin-bottom: 5px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    border: 1px solid #222;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 1px;
`;

export const ViewCountPoints = styled.View`
    position: absolute;
    background-color: #fff;
    padding: 5px;
    border-radius: 15px;
    justify-content: center;
    bottom: 5px;
    right: 5px;
    z-index: 1;
`;

export const TextCountPoints = styled.Text`
    text-align: center;
    color: #222;
    font-weight: bold;
    font-size: 12px;
`;

export const ImageCompliment = styled.Image`
    height: 55px;
    width: 55px;
    border-radius: 10px;
`;

export const ViewTextCompliment = styled.View`
    background-color: #fff;
    padding: 3px;
    position: absolute;
    z-index: 1;
    width: 70px;
    top: -5px;
    left: 2.5px;
    border-radius: 5px;
`;

export const TextCompliment = styled.Text`
    font-size: 7px;
    color: #000;
    text-align: center;
    /* box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 1px; */
`;

export const ViewComments = styled.View`
    display: flex;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 1px;
`;

export const Comment = styled.View`
   background-color: #fff;
   border-radius: 10px; 
   height: 80px;
   width: ${width / 2}px;
   padding: 10px;
   margin-right: 10px;
   position: relative;
`;

export const TextComment = styled.Text`
    font-style: italic;
    text-align: justify;
`;

export const TextDateComment = styled.Text`
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: 12px;
    color: #000;
`;