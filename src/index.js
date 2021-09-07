import React from 'react'

import Home from './pages/Home'

import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import store from './store'

//console.disableYellowBox = true;

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar backgroundColor="#FFF" barStyle="light-content" />
            <Provider store={store}>
                <Home />
            </Provider>
        </>
    )
}

export default App
