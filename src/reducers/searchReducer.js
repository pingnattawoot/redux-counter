import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function searchReducer(state = initialState.search, action){
    switch(action.type){
        case types.LOAD_SEARCH_SUGGESTION_SUCCESS: 
            return Object.assign({}, state, { suggestions: action.results })
        case types.LOAD_SEARCH_SUGGESTION_ERROR:
            return Object.assign({}, state, { suggestions: []});
        default:
            return state;
    }
}