import React, { createRef, useEffect, useRef, useState } from 'react'
import { Dimensions, Image } from 'react-native'

import {
    Container,
} from './style'

import marker_bigode_1 from '../../assets/marker_bigode_1.png'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function MarkerBarber() {

    return (

        <Container>
            <Image source={marker_bigode_1} style={{ width: 35, height: 60 }} />
        </Container >

    )

}
