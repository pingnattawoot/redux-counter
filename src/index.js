import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import MyDropdown from './components/MyDropdown'
import MyLabel from './components/MyLabel'
import MyInput from './components/MyInput'

injectTapEventPlugin()

const store = configureStore()
render(
    <Provider store={store} >
        <div>
            <MyDropdown />
            <MyLabel />
            <MyInput />
        </div>
    </Provider>
    ,
    document.getElementById('app')
) 