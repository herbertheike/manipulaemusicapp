import {GET_DATA_SUCCESS, SEARCHTERM} from '../actions/actionTypes';

const initialState = {
    searchterm:'',
    song: [],
    load:false
  
};
const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {...state, song:action.song, load:true};
        case SEARCHTERM:
            return {...state, song:action.searchterm};
        default:
            return state;
    }
}
export default reducer;