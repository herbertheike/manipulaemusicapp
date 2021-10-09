import {GET_DATA_SUCCESS,SEARCHTERM, INSERT_FAV, DELETE_FAV, GET_FAV} from './actionTypes';
import api from '../services/api';

export function getData(){
  return async function(dispatch) {
      return await api
      .get("/chart/0/tracks?index=0&limit=100", {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
      dispatch(getDataSuccess(response.data));
    })
  } 
}

export function searchTerm(data){
  return async function(dispatch) {
    return await api
    .get("/search/?q=" + data+"&order=RANKING", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      
    dispatch(search(response.data));
  })
} 
}

export function insertFav(id, title, artist, album, duration, preview, albumcover, link){
  return {
    type: INSERT_FAV,
    favArr:[{
            id:id,
            title:title,
            artist:artist,
            album:album,
            duration:duration,
            preview:preview,
            albumcover:albumcover,
            link:link,
          }]
    }
}

export function deleteFav(array){
  return{
        type:DELETE_FAV,
        arrnew:array
      }
}

const search = (data) =>{
  return {
      type: SEARCHTERM,
      searchterm:data,
  }
}

const getDataSuccess = (data) =>{
  return {
      type: GET_DATA_SUCCESS,
      song:data
      }
}