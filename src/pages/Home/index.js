import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dimensions, View, Easing, Animated, Image } from 'react-native'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';

import {
    Container,
    Opacity,
    ImageFundo,
    ImageRow,
    ViewLogo,
    ImageLogo,
    ImagePixel,
    ButtonMenu,
    ImageRowInfo,
    TextInfo,
    CloseMap,
    TextClose
} from './style'

import fundo from '../../assets/fundo_1.jpg'
import row from '../../assets/row.jpg'
import logo from '../../assets/teste.png'
import pixel from '../../assets/pixel.png'
import marker_bigode from '../../assets/marker_bigode_1.png'
import Modal from '../../components/Modal';
import MarkerBarber from '../../components/MarkerBarber'
import { MAP_STYLE_RETRO } from '../../helper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const wView = width / 2
const hView = height / 2

const Home: React.FC = () => {

    const user = useSelector(state => state.user)
    const dark = useSelector(state => state.dark)

    const [loader, setLoader] = useState(false)
    const [modalAnimated, setModalAnimated] = useState(new Animated.Value(height))
    const [map, setMap] = useState(false)


    const dispatch = useDispatch()

    useEffect(() => {
        // showModal()
    }, [])

    hideModal = () => {

        Animated.timing(
            modalAnimated,
            {
                toValue: height,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start()


        setTimeout(() => {
            dispatch({ type: "SET_DARK", data: false })
            dispatch({ type: "SET_MODAL", data: false })
        }, 300)
    }

    showModal = (who) => {

        dispatch({ type: "SET_DARK", data: true })
        dispatch({ type: "SET_MODAL", data: who })

        Animated.timing(
            modalAnimated,
            {
                toValue: 0,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start()

    }

    return (

        <Container>

            {map &&
                <>

                    <MapView
                        style={{
                            height: height,
                            width: width,
                        }}
                        provider={PROVIDER_GOOGLE}
                        customMapStyle={MAP_STYLE_RETRO}
                        initialRegion={{
                            latitude: -27.099587,
                            longitude: -52.616281,
                            latitudeDelta: 0.014,
                            longitudeDelta: 0.015
                        }}>

                        <Marker
                            key={1}
                            coordinate={{
                                latitude: -27.099075,
                                longitude: -52.617912
                            }}
                            anchor={{ x: 0.5, y: 1 }}>

                            <MarkerBarber />

                        </Marker>

                    </MapView>

                    <CloseMap onPress={() => setMap(false)}>
                        <TextClose>X</TextClose>
                    </CloseMap>

                </>
            }

            {!map && <>
                <ImageFundo source={fundo} />
                <ImageRow source={row} />

                <ViewLogo>
                    <ImageLogo source={logo} />
                </ViewLogo>

                <ImagePixel source={pixel} />

                <LinearGradient colors={["#f5ddc6", "#f5ddc6", "#f5ddc6", "#fff"]} style={{
                    top: width / 2 - wView,
                    padding: 20,
                    paddingTop: 60,
                    flex: 1,
                }}>

                    <ButtonMenu onPress={() => { showModal("Agendamentos") }}>
                        <ImageRowInfo source={row} />
                        <TextInfo>Agendamentos</TextInfo>
                    </ButtonMenu>

                    <ButtonMenu onPress={() => { showModal("Barbeiros") }}>
                        <ImageRowInfo source={row} />
                        <TextInfo>Barbeiros</TextInfo>
                    </ButtonMenu>

                    <ButtonMenu onPress={() => { setMap(true) }}>
                        <ImageRowInfo source={row} />
                        <TextInfo>Nossas unidades</TextInfo>
                    </ButtonMenu>

                    <ButtonMenu onPress={() => { showModal("Meus cortes") }}>
                        <ImageRowInfo source={row} />
                        <TextInfo>Meus cortes</TextInfo>
                    </ButtonMenu>

                    <ButtonMenu onPress={() => { }}>
                        <ImageRowInfo source={row} />
                        <TextInfo>Conectar-se</TextInfo>
                    </ButtonMenu>

                </LinearGradient>

                {loader && <Loader />}

                {/* MODAL */}
                {dark && <Opacity />}
                <Animated.View style={{
                    position: "absolute",
                    zIndex: 5,
                    height: height,
                    width: width,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: modalAnimated
                }}>
                    <Modal callback={() => hideModal()} />
                </Animated.View>
            </>}

        </Container>

    )
}

export default Home;