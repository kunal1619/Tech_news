import React from 'react'

const reducer = (state, action) => {
  switch(action.type){
    case "GET_STORIES":
        return{
            ...state,
            hits : action.payload.hits,
            nbPage : action.payload.nbPage,
            isLoading : false
        }
    case "REMOVE_POST":
        return{
            ...state,
            hits : state.hits.filter((elm)=> elm.objectID !== action.payload)
        }
    case "NEXT":
        if(state.page >= 0 && state.page<state.nbPage){
            return{
                ...state,
                page : state.page + action.payload
            }
        }
    case 'PREV':
        if(state.page > 0 && state.page <= state.nbPage){
            return{
                ...state,
                page : state.page - action.payload
            }
        }
    case 'INPUT_DATA':
        return{
            ...state,
            query : action.payload
        }
  }
  return state;
}

export default reducer
