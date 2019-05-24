import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-native'

export const LOADING = 'LOADING';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

export const MODAL_VISIBLE = 'MODAL_VISIBLE';//Toggle Modal
export const toggleModal = () => dispatch =>{
  
  dispatch({type:MODAL_VISIBLE});
}

export const CLEAR_SEARCH = 'CLEAR_SEARCH';//Clear Search
export const clearSearch = () => dispatch =>{
  dispatch({type:CLEAR_SEARCH})
}


export const SEARCH = 'SEARCH'; //Search Request Submitted
export const search  = () => dispatch =>{
  dispatch({type:LOADING});
  
   axios
    .get(`https://swapi.co/api/people/`)
    .then(res => dispatch({type:SEARCH_SUCCESS,payload:res.data.results}))
    .catch(err => console.log(err));
} 


