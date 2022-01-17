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
