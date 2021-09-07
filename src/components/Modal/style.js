import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const wView = width / 2
const hView = height / 1.5

export const Container = styled.View`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const ViewModal = styled.View`
    position: absolute;
    height: ${hView}px;
    width: ${width}px;
    bottom: 0;
    background-color: #f9f9f9;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`;
