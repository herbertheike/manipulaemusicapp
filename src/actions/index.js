import {GET_DATA_SUCCESS,SEARCHTERM} from './actionTypes';
import api from '../services/api';

export function getData(){
  return async function(dispatch) {
      return await api
      .get("/chart/0/tracks?index=0", {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        //console.log(response)
      dispatch(getDataSuccess(response.data));
    })
  } 
}

export function searchTerm(data){
  return async function(dispatch) {
    return await api
    .get("/search/?q=" + data+"&order=RATING_DESC", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Contzrol-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
    dispatch(search(response.data));
  })
} 
}

const search = (data) =>{
  return {
      type: SEARCHTERM,
      searchterm:data
  }
}

const getDataSuccess = (data) =>{
  return {
      type: GET_DATA_SUCCESS,
      song:data
  }
}