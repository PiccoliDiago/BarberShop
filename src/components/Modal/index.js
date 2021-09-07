import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Container,
    ViewModal
} from './style'

import Agendamentos from '../Agendamentos'
import Barbeiros from '../Barbeiros'
import MeusCortes from '../MeusCortes'

import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default function Modal({ callback }) {

    const modal = useSelector(state => state.modal)

    onSwipeUp = (gestureState) => {
        console.log('You swiped up!');
    }

    onSwipeDown = (gestureState) => {
        callback()
    }

    return (
        <Container>

            <ViewModal>
                <GestureRecognizer
                    onSwipeUp={(state) => onSwipeUp(state)}
                    onSwipeDown={(state) => onSwipeDown(state)}
                    // onSwipeLeft={(state) => this.onSwipeLeft(state)}
                    // onSwipeRight={(state) => this.onSwipeRight(state)}
                    config={{
                        velocityThreshold: 0.1,
                        directionalOffsetThreshold: 80
                    }}
                    style={{
                        paddingTop: 40,
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingBottom: 10
                    }}>

                    {modal === "Agendamentos" && <Agendamentos callback={() => callback()} />}
                    {modal === "Barbeiros" && <Barbeiros />}
                    {modal === "Meus cortes" && <MeusCortes />}

                </GestureRecognizer>
            </ViewModal>

        </Container>
    )

}