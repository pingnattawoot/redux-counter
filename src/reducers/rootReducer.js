import { combineReducers } from 'redux'
import dropdown from './dropdownReducer'
import input from './inputReducer'

const rootReducer = combineReducers({
    dropdown,
    input
})

export default rootReducer