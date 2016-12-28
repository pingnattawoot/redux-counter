'use strict'
import * as types from './actionTypes'
import { searchService } from '../api/index'

export function loadSuggestion(query){
    //console.log('loadSuggestion:'+query)
    return function(dispatch){
        searchService.get(query).then(response => {
            //console.log(response)
            dispatch({
                type: types.LOAD_SEARCH_SUGGESTION_SUCCESS,
                results : response
            })
        }).catch(error =>{
            //console.log(error)
            dispatch({
                type: types.LOAD_SEARCH_SUGGESTION_ERROR,
                results : response
            })
        })
    }
}