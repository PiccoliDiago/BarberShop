import React, { createRef, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Alert, View, Text, Dimensions, Image, ScrollView, FlatList } from 'react-native'

import {
    Container,
    ViewBarber,
    FundoImageBarber,
    ImageBarber,
    TextBarber,
    TextTitle,
    ViewStar,
    ImageStar,
    TextStar,
    ViewCompliments,
    ViewTextCompliment,
    TextCompliment,
    ViewCompliment,
    ViewCountPoints,
    TextCountPoints,
    ImageCompliment,
    ViewComments,
    Comment,
    TextComment,
    TextDateComment
} from './style'

import barba_1 from '../../assets/barba_1.jpg'
import barba_2 from '../../assets/barba_2.jpg'
import barba_3 from '../../assets/barba_3.jpg'
import barba_4 from '../../assets/barba_4.jpg'
import barba_5 from '../../assets/barba_5.jpg'
import star from '../../assets/star_on.png'
import clock_time from '../../assets/clock_time.png'
import best from '../../assets/best.png'
import resenha from '../../assets/resenha.png'
import respect from '../../assets/respect.png'

import Moment from 'moment/min/moment-with-locales';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Barbeiros() {

    const [barberSelected, setBarberSelected] = useState(false)

    var services = [
        { id: 1, name: 'Corte', cost: 30, time: 30 },
        { id: 2, name: 'Barba', cost: 30, time: 15 },
        { id: 3, name: 'Corte e barba', cost: 30, time: 45 },
    ]

    var compliments1 = { punctuality: 13, excellence: 20, talk: 1020, respect: 2 }
    var comments1 = [
        { text: "Serviço excelente, muito cuidadoso e boa conversa", date: "2021-08-23 12:12:12" },
        { text: "Resenha e serviço de primeira!!", date: "2021-08-22 12:12:12" },
    ]

    var compliments2 = { punctuality: 20, excellence: 40, talk: 10, respect: 944 }
    var comments2 = [
        { text: "Cabelinho na régua, serviço top", date: "2021-08-24 08:12:12" },
        { text: "Ganhou um cliente, serviço excelente e corte perfeito", date: "2021-08-22 12:12:12" },
    ]

    var compliments3 = { punctuality: 23, excellence: 70, talk: 110, respect: 912 }
    var compliments4 = { punctuality: 43, excellence: 120, talk: 170, respect: 12 }
    var compliments5 = { punctuality: 103, excellence: 1110, talk: 2, respect: 123 }

    var barbers = [
        { id: 1, name: 'Diago Piccoli', url: barba_1, rate: 4.9, services: services, compliment: compliments1, comments: comments1 },
        { id: 2, name: 'Valmor Secco', url: barba_2, rate: 5, services: services, compliment: compliments2, comments: comments2 },
        { id: 3, name: 'Cauberto Rodrigues', url: barba_3, rate: 4.8, services: services, compliment: compliments3, comments: [] },
        { id: 4, name: 'Alexandre Bit', url: barba_4, rate: 4, services: services, compliment: compliments4, comments: [] },
        { id: 5, name: 'Gabriel Bit', url: barba_5, rate: 4.5, services: services, compliment: compliments5, comments: [] },
    ]

    useEffect(() => {
        Moment.locale('pt-br');
    }, [])

    handleBarber = item => {

        console.log(item)
        setBarberSelected(item)

    }

    renderBarbers = ({ item }) => {

        return (
            <View style={{ opacity: (barberSelected.id === item.id) ? 1 : 0.5 }}>
                <ViewBarber onPress={() => handleBarber(item)}>
                    <FundoImageBarber>
                        <ImageBarber source={item.url}></ImageBarber>
                    </FundoImageBarber>
                    <TextBarber numberOfLines={1} ellipsizeMode='tail'>{item.name}</TextBarber>
                </ViewBarber>
            </View>
        )

    }

    return (

        <Container>

            <FlatList
                data={barbers}
                refreshing={true}
                horizontal={true}
                style={{ maxHeight: 115, padding: 5, borderBottomWidth: 2, borderBottomColor: '#f7e7d7' }}
                keyExtractor={item => item.id}
                renderItem={renderBarbers}
            />

            {barberSelected && <>
                <ViewStar>
                    <ImageStar source={star} />
                    <TextStar>{barberSelected.rate.toFixed(1)}</TextStar>
                </ViewStar>

                <TextTitle>Elogios</TextTitle>
                <ViewCompliments>

                    <ViewCompliment>

                        <ViewTextCompliment>
                            <TextCompliment>PONTUALIDADE</TextCompliment>
                        </ViewTextCompliment>
                        <ViewCountPoints>
                            <TextCountPoints>{barberSelected.compliment.punctuality}</TextCountPoints>
                        </ViewCountPoints>
                        <ImageCompliment source={clock_time} />

                    </ViewCompliment>

                    <ViewCompliment>

                        <ViewCountPoints>
                            <TextCountPoints>{barberSelected.compliment.excellence}</TextCountPoints>
                        </ViewCountPoints>
                        <ImageCompliment source={best} />
                        <ViewTextCompliment>
                            <TextCompliment>EXCELÊNCIA</TextCompliment>
                        </ViewTextCompliment>
                    </ViewCompliment>

                    <ViewCompliment>
                        <ViewCountPoints>
                            <TextCountPoints>{barberSelected.compliment.talk}</TextCountPoints>
                        </ViewCountPoints>
                        <ImageCompliment source={resenha} />
                        <ViewTextCompliment>
                            <TextCompliment>RESENHA</TextCompliment>
                        </ViewTextCompliment>
                    </ViewCompliment>

                    <ViewCompliment>
                        <ViewCountPoints>
                            <TextCountPoints>{barberSelected.compliment.respect}</TextCountPoints>
                        </ViewCountPoints>
                        <ImageCompliment source={respect} />
                        <ViewTextCompliment>
                            <TextCompliment>RESPEITO</TextCompliment>
                        </ViewTextCompliment>
                    </ViewCompliment>

                </ViewCompliments>

                <TextTitle>Relatos</TextTitle>
                <ViewComments>

                    <ScrollView horizontal={true}>

                        {barberSelected.comments.map(item => {
                            return (
                                <Comment>
                                    <TextComment>
                                        "{item.text}"
                                    </TextComment>
                                    <TextDateComment>
                                        {Moment(item.date, "YYYY-MM-DD HH:mm:ss").fromNow()}
                                    </TextDateComment>
                                </Comment>
                            )
                        })}

                    </ScrollView>

                </ViewComments>

            </>}

        </Container>

    )
}