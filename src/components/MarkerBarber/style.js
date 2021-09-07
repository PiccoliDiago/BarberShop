import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Container = styled.View`
    width: 100%;
    height: 100%;
    position: relative;
`;

