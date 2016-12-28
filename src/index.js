import 'babel-polyfill'; 
import React from 'react'
import { render } from 'react-dom'

import Map from './components/map/Map'
import Search from './components/search/Search'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

injectTapEventPlugin()

const store = configureStore()
render(
    <MuiThemeProvider >
        <Provider store = {store} >
            <div>
                <Map/>
                <Search/>
            </div>
        </Provider>
    </MuiThemeProvider>
    ,
    document.getElementById('app')
) 