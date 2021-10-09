import {GET_DATA_SUCCESS, SEARCHTERM, INSERT_FAV, DELETE_FAV, GET_FAV} from '../actions/actionTypes';

const initialState = {
    searchterm:'',
    song: [],
    favArr:[],
    arrnew:[],
  
};
const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {...state, song:action.song};
        case SEARCHTERM:
            return {...state, song:action.searchterm};
        case INSERT_FAV:
            return {...state, favArr:state.favArr.concat(action.favArr)}
        case DELETE_FAV:
            return {...state, favArr:action.arrnew};
        default:
            return state;
    }
}
export default reducer;