import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dimensions, View, Easing, Animated, Image } from 'react-native'

import {
    Container,
    Title,
    CardInfo,
    TitleBarber,
    SubTitle
} from './style'
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const wView = width / 2
const hView = height / 2

const Login: React.FC = () => {

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {

    }, [])

    return (

        <Container>

            <LinearGradient colors={["#f5d1b0", "#f5d6ba", "#f5ddc6", "#fae4cf"]} style={{
                padding: 20,
                paddingTop: 60,
                flex: 1,
            }}>




            </LinearGradient>

        </Container>

    )
}

export default Login;