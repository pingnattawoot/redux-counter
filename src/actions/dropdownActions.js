import * as types from './actionTypes'

export const changeNumberDropdown = (value) => {
    return {
        type: types.CHANGE_NUMBER_DROPDOWN,
        value: value
    }
}