import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function inputReducer(state = initialState.input, action) {
    switch (action.type) {
        case types.CHANGE_TEXT_INPUT:
            return  Object.assign({}, state ,{inputValue: action.value})
        default:
            return state;
    }
}