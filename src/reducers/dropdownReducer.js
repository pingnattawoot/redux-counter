import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function dropdownReducer(state = initialState.dropdown, action) {
    switch (action.type) {
        case types.CHANGE_NUMBER_DROPDOWN:
            return Object.assign({}, state, { numberDropdownValue: action.value });
        default:
            return state;
    }
}