import {
  GET_DATA_SUCCESS,
  SEARCHTERM,
  INSERT_FAV,
  DELETE_FAV,
} from "../actions/actionTypes";

const initialState = {
  searchterm: "",
  song: [],
  favArr: [],
  arrnew: [],
  length: 0,
  favLength: 0,
};
const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_DATA_SUCCESS:
      let length = action.song.data.length;
      console.log(length);
      return { ...state, song: action.song, length: length };
    case SEARCHTERM:
      let slength = action.searchterm.data.length;
      console.log(slength);
      return { ...state, song: action.searchterm, length: slength };
    case INSERT_FAV:
      let flength = state.favArr.length;
      console.log(flength);
      return {
        ...state,
        favArr: state.favArr.concat(action.favArr),
        favLength: flength,
      };
    case DELETE_FAV:
      let delflength = state.favLength - 1;
      console.log(delflength);
      return { ...state, favArr: action.arrnew, favLength: delflength };
    default:
      return state;
  }
};
export default reducer;
