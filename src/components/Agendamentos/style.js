import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Container = styled.View`
    width: 100%;
    height: 100%;
    position: relative;
`

export const TextTite = styled.Text`
    font-family: "coffee+tea demo";
    font-size: 30px;
    padding-top: 5px;
    color: #222;
    letter-spacing: 1.5px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
`

export const ButtonMenu = styled.TouchableOpacity`
    height: 55px;
    display: flex;
    flex-direction: row;
    background-color: #f9f9f9;
    border: 2px solid #222;
    border-radius : 5px;
    overflow: hidden;
    margin-top: 20px;
`

export const Viewicon = styled.View`
    height: 55px;
    width: 55px;
    background-color: #f7e7d7;
    align-items: center;
    justify-content: center;
`;

export const ImageIcon = styled.Image`
    height: 30px;
    width: 30px;
`

export const TextTime = styled.Text`
    font-size: 15px;
    font-weight: bold;
`

export const ViewInfo = styled.View`
    padding-left: 15px;
    justify-content: center;
`

export const ViewInfoDate = styled.View`
    padding-left: 15px;
    justify-content: center;
    display: flex;
    flex-direction: row;
    padding-top: 8px;
`

export const TextInfo = styled.Text`
    font-family: "coffee+tea demo";
    font-size: 25px;
    padding-top: 5px;
    color:#222;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
    letter-spacing: 1.5px;
`

export const ButtonSelected = styled.View`
    height: 55px;
    display: flex;
    position: relative;
    flex-direction: row;
    background-color: #f7e7d7;
    border:2px solid #222;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-top: 20px;
`
export const ViewDesc = styled.View`
    position: absolute;
    padding: 2px 5px 2px 5px;
    background-color: #222;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    top: -15px;
    left: -2px;
    justify-content: center;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px; */
`

export const TextDesc = styled.Text`
    font-size: 9px;
    color:#fff;
    font-weight: bold;
`

export const IconClose = styled.TouchableOpacity`
    position: absolute;
    top: 13px;
    right: 10px;
    height: 25px;
    width: 25px;
    background-color: #fff;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    color: #222;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px;
`

export const TextClose = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #222;
`

export const Paginator = styled.View`
    width: ${width / 1.5}px;
    height: 60px; 
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Pag = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background-color: #222;
    margin: 10px;
`

export const PagSelect = styled.View`
    width: 13px;
    height: 13px;
    border-radius: 100px;
    margin: 8px 10px 10px 10px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 6px;
`

export const ViewBarber = styled.View`
    height: ${height / 2.3}px;
    width: ${width}px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
    position: relative;
    padding: 5px;
`

export const ImageBarber = styled.Image`
    width: ${width / 1.5}px;
    height: 250px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const ViewDetailsBarber = styled.View`
    bottom: 0;
    height: 80px;
    padding: 15px 15px 10px 15px;
    width: ${width / 1.5}px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
`

export const TextBarber = styled.Text`
    font-size: 27px;
    font-family: "coffee+tea demo"; 
    letter-spacing: 1.5px;
`

export const ButtonSelect = styled.TouchableOpacity`
    background-color: #0b929e;
    align-self: center;
    border-radius: 5px;
    padding: 10px;
    width: ${width / 1.5}px;
    max-height: 40px;
    margin-bottom: 40px;
`

export const TextSelect = styled.Text`
    font-size: 18px;
    text-align: center;
    color: #fff;
    font-weight: bold;
`

export const ViewCalendar = styled.View`
    flex: 1;
`

export const TextCalendar = styled.Text`
    font-family: "coffee+tea demo";
    font-size:20px;
    margin: 10px 0 10px 0;
    color:#222;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
    letter-spacing: 1.5px;
`

export const Times = styled.TouchableOpacity`
    width: 70px;
    height: 35px; 
    border-radius: 5px;
    margin-right: 10px;
    justify-content: center;
`

export const TextTimes = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #222;
    text-align: center;
`

export const ButtonAgendamento = styled.View`
    display: flex;
    flex-direction: row;
    height: 55px;
    margin-top: 20px;
    /* box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px; */
`

export const ButtonCancel = styled.TouchableOpacity`
    width: 60px;
    height: 100%;
    background-color: #f7e7d7;
    border-radius: 5px;
    justify-content: center;
    margin-right: 10px;
`

export const TextCancel = styled.Text`
    color: #000;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
`

export const ButtonAgendar = styled.TouchableOpacity`
    flex: 1;
    height: 100%;
    background-color: #222;
    border-radius: 5px;
    justify-content: center;
    /* border: 2px solid #f7e7d7; */
`

export const TextAgendar = styled.Text`
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    padding-top: 5px;
    font-family: "coffee+tea demo";
    letter-spacing: 1.5px;
`