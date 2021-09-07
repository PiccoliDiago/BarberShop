import React, { createRef, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Alert, View, Text, Dimensions, Image, ScrollView } from 'react-native'

import {
    Container,
    TextTite,
    ButtonMenu,
    Viewicon,
    ImageIcon,
    TextTime,
    ViewInfo,
    ViewInfoDate,
    TextInfo,
    ViewDesc,
    TextDesc,
    ButtonSelected,
    IconClose,
    TextClose,
    ViewBarber,
    ImageBarber,
    ViewDetailsBarber,
    TextBarber,
    Paginator,
    PagSelect,
    Pag,
    ButtonSelect,
    TextSelect,
    ViewCalendar,
    TextCalendar,
    ViewTimes,
    Times,
    TextTimes,
    ButtonAgendamento,
    ButtonCancel,
    TextCancel,
    ButtonAgendar,
    TextAgendar
} from './style'

import navalha from '../../assets/navalha.png'
import moustache from '../../assets/moustache.png'
import calendar from '../../assets/calendar.png'

import barba_1 from '../../assets/barba_1.jpg'
import barba_2 from '../../assets/barba_2.jpg'
import barba_3 from '../../assets/barba_3.jpg'
import barba_4 from '../../assets/barba_4.jpg'
import barba_5 from '../../assets/barba_5.jpg'
import star from '../../assets/star_on.png'

import Carousel from 'react-native-snap-carousel'
import CalendarStrip from 'react-native-calendar-strip';
import Moment from 'moment/min/moment-with-locales';

import {
    DEFAULT_TITLE, locale
} from '../../helper'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Agendamentos({ callback }) {

    const [itemSelected, setItemSelected] = useState(false)
    const [service, setService] = useState(false)
    const [barber, setBarber] = useState(false)
    const [indexBarber, setIndexBarber] = useState(0)
    const [date, setDate] = useState(false)
    const [dayFind, setDayFind] = useState(false)

    useEffect(() => {
        Moment.locale('pt-br');
    }, [])

    var services = [
        { id: 1, name: 'Corte', cost: 30, time: 30 },
        { id: 2, name: 'Barba', cost: 30, time: 15 },
        { id: 3, name: 'Corte e barba', cost: 30, time: 45 },
    ]

    var barbers = [
        { id: 1, name: 'Diago Piccoli', url: barba_1, rate: 4.9, services: services },
        { id: 2, name: 'Valmor Secco', url: barba_2, rate: 5, services: services },
        { id: 3, name: 'Cauberto Rodrigues', url: barba_3, rate: 4.8, services: services },
        { id: 4, name: 'Alexandre Bit', url: barba_4, rate: 4, services: services },
        { id: 5, name: 'Gabriel Bit', url: barba_5, rate: 4.5, services: services },
    ]

    const [times, setTimes] = useState([
        { id: 1, time: "09:00", isBusy: false, selected: false },
        { id: 2, time: "10:00", isBusy: false, selected: false },
        { id: 3, time: "11:00", isBusy: true, selected: false },
        { id: 4, time: "13:30", isBusy: false, selected: false },
        { id: 5, time: "14:30", isBusy: false, selected: false },
        { id: 6, time: "15:30", isBusy: true, selected: false },
        { id: 7, time: "16:30", isBusy: false, selected: false },
    ])

    handleService = () => {
        setItemSelected("Atendimento")
    }

    handleCancelService = () => {
        setItemSelected(false)
        setService(false)
        handleCancelBarber()
    }

    handleClickServices = (item) => {
        setItemSelected(false)
        setService(item)
    }

    handleBarber = () => {
        if (!service) {
            Alert.alert(DEFAULT_TITLE, "Selecione o serviço que deseja realizar")
            return
        }
        setItemSelected("Barbeiro")
    }

    handleCancelBarber = () => {
        setItemSelected(false)
        setBarber(false)
        setIndexBarber(0)
        handleCancelDate()
    }

    handleClickBarber = () => {
        setItemSelected(false)
        setBarber(barbers[indexBarber])
    }

    handleDate = () => {
        if (!barber) {
            Alert.alert(DEFAULT_TITLE, "Selecione o barbeiro de sua preferência")
            return
        }

        setItemSelected("Data")
    }

    handleCancelDate = () => {
        setItemSelected(false)
        var aux = []
        times.map(t => {
            t.selected = false
            aux.push(t)
        })
        setTimes(aux)
        setDayFind(false)
        setDate(false)
    }

    handleClickDate = () => {

        if (typeof times.find(t => t.selected) == 'undefined') {
            Alert.alert(DEFAULT_TITLE, "Informe o horário desejado")
            return
        }

        setItemSelected(false)
        setDate(Moment(dayFind, "YYYY-MM-YY").format('dddd'))

    }

    handleSchedule = () => {

        if (service && barber && date) {

            console.log(service)
            console.log(barber)
            console.log(dayFind)
            console.log(times.find(t => t.selected))

            return;
        }

    }

    renderBarber = ({ item, index }) => {

        var color = (index % 2 == 0) ? "#fff" : "#000"
        var colorTxt = (index % 2 == 1) ? "#fff" : "#000"

        if (item.services.find(i => i.name === service.name)) {
            return (
                <ViewBarber key={item.id}>
                    <ImageBarber source={item.url} />
                    <ViewDetailsBarber style={{ backgroundColor: color }}>
                        <TextBarber style={{ color: colorTxt }}>{item.name}</TextBarber>
                        <View style={{ display: 'flex', marginTop: 3, flexDirection: 'row' }}>
                            <Image style={{ width: 22, height: 22 }} source={star} />
                            <Text style={{ color: colorTxt, fontSize: 15, fontWeight: 'bold', marginLeft: 7, marginTop: 4 }}>{item.rate.toFixed(1)}</Text>
                        </View>
                    </ViewDetailsBarber>
                </ViewBarber>
            );
        }
    }

    return (

        <Container>

            {!itemSelected && <>

                <TextTite>Selecione:</TextTite>

                <>
                    {!service &&
                        <ButtonMenu onPress={() => handleService()}>
                            <Viewicon>
                                <ImageIcon source={navalha} />
                            </Viewicon>
                            <ViewInfo>
                                <TextInfo>Atendimento</TextInfo>
                            </ViewInfo>
                        </ButtonMenu>
                    }
                    {service &&
                        <ButtonSelected onPress={() => { }}>
                            <ViewDesc>
                                <TextDesc>Atendimento</TextDesc>
                            </ViewDesc>
                            <ViewInfo>
                                <TextInfo>{service.name}</TextInfo>
                            </ViewInfo>
                            <IconClose onPress={() => handleCancelService()}>
                                <TextClose>X</TextClose>
                            </IconClose>
                        </ButtonSelected>
                    }
                </>

                <>
                    {!barber && <View style={{ opacity: (service) ? 1 : 0.5 }}>
                        <ButtonMenu onPress={() => handleBarber()}>
                            <Viewicon>
                                <ImageIcon source={moustache} />
                            </Viewicon>
                            <ViewInfo>
                                <TextInfo>Barbeiro</TextInfo>
                            </ViewInfo>
                        </ButtonMenu>
                    </View>}

                    {barber &&
                        <ButtonSelected onPress={() => { }}>
                            <ViewDesc>
                                <TextDesc>Barbeiro</TextDesc>
                            </ViewDesc>
                            <ViewInfo>
                                <TextInfo>{barber.name}</TextInfo>
                            </ViewInfo>
                            <IconClose onPress={() => handleCancelBarber()}>
                                <TextClose>X</TextClose>
                            </IconClose>
                        </ButtonSelected>
                    }
                </>

                <>
                    {!date && <View style={{ opacity: (barber) ? 1 : 0.5 }}>
                        <ButtonMenu onPress={() => handleDate()}>
                            <Viewicon>
                                <ImageIcon source={calendar} />
                            </Viewicon>
                            <ViewInfo>
                                <TextInfo>Data/Hora</TextInfo>
                            </ViewInfo>
                        </ButtonMenu>
                    </View>}

                    {date &&
                        <ButtonSelected onPress={() => { }}>
                            <ViewDesc>
                                <TextDesc>Data/Hora</TextDesc>
                            </ViewDesc>
                            <ViewInfoDate>
                                <TextInfo>{date}</TextInfo>
                                <Times style={{ marginLeft: 10, marginTop: 2, borderWidth: 2, borderColor: "#0b929e" }}>
                                    <TextTimes>
                                        {Moment(dayFind, "YYYY-MM-YY").format('DD/MM')}
                                    </TextTimes>
                                </Times>
                                <Times style={{ borderWidth: 2, marginTop: 2, borderColor: "#0b929e" }}>
                                    <TextTimes>
                                        {times.find(t => t.selected).time}
                                    </TextTimes>
                                </Times>
                            </ViewInfoDate>
                            <IconClose onPress={() => handleCancelDate()}>
                                <TextClose>X</TextClose>
                            </IconClose>
                        </ButtonSelected>
                    }

                </>

                <ButtonAgendamento style={{ opacity: (date) ? 1 : 0.5 }}>

                    <ButtonCancel onPress={() => {
                        if (date) callback()
                    }}>
                        <TextCancel>x</TextCancel>
                    </ButtonCancel>

                    <ButtonAgendar onPress={() => handleSchedule()}>
                        <TextAgendar>Agendar</TextAgendar>
                    </ButtonAgendar>

                </ButtonAgendamento>

            </>}


            {itemSelected === "Atendimento" &&
                services.map(item => {
                    return (
                        <ButtonMenu key={item.id} onPress={() => handleClickServices(item)}>
                            <Viewicon>
                                <TextTime>{item.time}</TextTime>
                                <TextTime>min</TextTime>
                            </Viewicon>
                            <ViewInfo>
                                <TextInfo>{item.name}</TextInfo>
                            </ViewInfo>
                        </ButtonMenu>
                    )
                })
            }

            {itemSelected === "Barbeiro" &&
                <View style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Carousel
                        data={barbers}
                        layout={'default'}
                        renderItem={this.renderBarber}
                        sliderWidth={width - 50}
                        itemWidth={width / 1.5}
                        onSnapToItem={index => setIndexBarber(index)}
                    />

                    <ButtonSelect onPress={() => handleClickBarber()}>
                        <TextSelect>SELECIONAR</TextSelect>
                    </ButtonSelect>

                    <Paginator>
                        {barbers.map((item, key) => {
                            if (key === indexBarber)
                                return (<PagSelect />)
                            return (<Pag />)
                        })}
                    </Paginator>

                </View>
            }

            {itemSelected === "Data" &&
                <ViewCalendar>

                    <TextCalendar>Disponibilidade de {barber.name}</TextCalendar>

                    <CalendarStrip
                        scrollable={true}
                        style={{ height: 100, borderTopRightRadius: 5, paddingTop: 15, paddingBottom: 5 }}
                        calendarColor={'#fff'}
                        calendarHeaderStyle={{ color: '#000' }}
                        dateNumberStyle={{ color: '#000' }}
                        dateNameStyle={{ color: '#000' }}
                        iconContainer={{ width: 30 }}
                        daySelectionAnimation={{ type: 'background', duration: 50, highlightColor: '#f7e7d7', borderHighlightColor: 'red' }}
                        onDateSelected={(date) => {
                            setDayFind(date)
                        }}
                        locale={locale}
                        startingDate={new Date()}
                        minDate={new Date()}
                    />

                    <ScrollView horizontal={true} style={{ paddingTop: 10, maxHeight: 80 }} showsHorizontalScrollIndicator={false}>
                        {/* <ViewTimes> */}

                        {dayFind && times.map(item => {

                            var color = '#fff'
                            if (item.isBusy) color = "#999"
                            if (item.selected) color = "#f7e7d7"

                            var op = (item.isBusy) ? 0.2 : 1

                            return (
                                <View style={{ opacity: op }} >
                                    <Times key={item.id} activeOpacity={0.5} style={{ backgroundColor: color }}
                                        onPress={() => {
                                            if (item.isBusy) return;

                                            var aux = []
                                            times.map(t => {
                                                t.selected = false
                                                if (t === item) t.selected = true
                                                aux.push(t)
                                            })
                                            setTimes(aux)
                                        }}>
                                        <TextTimes>{item.time}</TextTimes>
                                    </Times>
                                </View>
                            )
                        })}

                        {/* </ViewTimes> */}
                    </ScrollView>

                    {dayFind && <ButtonSelect onPress={() => handleClickDate()}>
                        <TextSelect>SELECIONAR</TextSelect>
                    </ButtonSelect>}

                </ViewCalendar>
            }

        </Container >

    )

}
