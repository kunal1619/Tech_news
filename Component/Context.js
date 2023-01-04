import React, { useReducer } from "react";
import axios from "axios"
import { createContext, useContext, useEffect } from "react"
import reducer from "./Reducer";

const url = "https://hn.algolia.com/api/v1/search?"

const AppContext = createContext();
const AppProvider = ({children}) => {

//--------Reducer-----
let initialState = {
  isLoading : true,
  query : "css",
  nbPage : 0,
  page : 0,
  hits : [],
}

const [state, dispatch] = useReducer(reducer, initialState)

//remove post
const removePost = (post_id) =>{
  dispatch({type : "REMOVE_POST", payload : post_id})
}

const prev = () =>{
  dispatch({type : "PREV", payload : 1})
}

const next = ()=>{
  dispatch({type : "NEXT", payload : 1})
}

const inputData = (inputValue)=>{
  // console.log(inputValue);
  dispatch({type : "INPUT_DATA", payload : inputValue})
}

//fetching data
useEffect(()=>{
  axios.get(`${url}query=${state.query}&page=${state.page}`).then((response)=>{
    dispatch({
      type : "GET_STORIES",
      payload : {
        hits : response.data.hits,
        nbPage : response.data.nbPages
      }
    })

  }).catch((e)=> console.log(e))
},[state.page, state.query])
  return (
    <div>
      <AppContext.Provider value={{...state, dispatch, removePost, next, prev, inputData}}>
        {children}
      </AppContext.Provider>
    </div>
  )
}

// create our won custom hook to avoid importing AppContext and useContext in consumer side

const useGlobalContext = () =>{
    return(
        useContext(AppContext)
    )
}

export {AppProvider, useGlobalContext}
