import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dimensions, View, Easing, Animated, Image } from 'react-native'

import {
    Container,
} from './style'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const wView = width / 2
const hView = height / 2

import Login from '../Login'
import UserMenu from '../User/Menu'

const Home: React.FC = () => {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(user)
    }, [])

    return (

        <Container>

            {user.id == 0 && <Login />}
            {user.id != 0 && <UserMenu />}

        </Container>

    )
}

export default Home;