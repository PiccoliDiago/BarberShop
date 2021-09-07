import React, { createRef, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Alert, View, Text, Dimensions, ScrollView, FlatList } from 'react-native'

import {
    Container,
    ViewImageProfile,
    ImageProfile,
    ViewDetailsProfile,
    TextNameProfile,
    TextAgendamentos,
    Legend,
    Ball,
    TextBall,
    ViewDetailsService,
    TextDetail,
    TextDetailDate,
    BallCancel
} from './style'


import eu from '../../assets/eu.jpg'

import Moment from 'moment/min/moment-with-locales';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function MeusCortes() {

    var user = {
        name: 'Douglas Castelo',
        services: [
            { id: 4, name: 'Corte e barba', status: 'OK', date: '2021-08-20 12:30:00' },
            { id: 3, name: 'Corte', status: 'OK', date: '2021-08-10 12:30:00' },
            { id: 2, name: 'Corte', status: 'CANCEL', date: '2021-08-10 11:30:00' },
            { id: 1, name: 'Corte', status: 'OK', date: '2021-08-08 11:30:00' },
            { id: 1, name: 'Barba', status: 'CANCEL', date: '2021-08-01 11:30:00' },
        ]
    }

    useEffect(() => {
        Moment.locale('pt-br');
    }, [])

    renderServices = (item) => {

        var color = (item.index % 2 == 0) ? '#f1f1f1' : '#fff'

        const service = item.item;

        return (
            <View style={{ marginBottom: 5, marginTop: 5, backgroundColor: color }}>

                <ViewDetailsService>
                    <TextDetail>{service.name}</TextDetail>
                    <TextDetailDate>{Moment(service.date, "YYYY-MM-DD HH:mm:ss").fromNow()}</TextDetailDate>
                    {service.status === "CANCEL" && <BallCancel />}
                </ViewDetailsService>
            </View>
        )

    }

    return (

        <Container>

            <ViewImageProfile>

                <ViewDetailsProfile>
                    <TextNameProfile>Sr. {user.name}</TextNameProfile>
                    {/* <Row /> */}
                    <TextAgendamentos>Agendamentos: {user.services.length}</TextAgendamentos>

                </ViewDetailsProfile>

                <ImageProfile source={eu} />

            </ViewImageProfile>


            {/* <Legend>
                    <Ball style={{ backgroundColor: '#03fc0f' }} />
                    <TextBall>Compareçeu</TextBall>
                </Legend> */}

            <Legend>
                <Ball style={{ backgroundColor: '#ff0000' }} />
                <TextBall>Cancelados</TextBall>
            </Legend>

            {/* <Legend>
                    <Ball style={{ backgroundColor: '#ff0000' }} />
                    <TextBall>Não compareçeu</TextBall>
                </Legend> */}


            <FlatList
                data={user.services}
                refreshing={true}
                keyExtractor={item => item.id}
                renderItem={renderServices}
            />

        </Container>

    )
}