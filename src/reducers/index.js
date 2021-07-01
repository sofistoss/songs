import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "Cheb Khaled DIDI", duration: "04:15" },
    { title: "Cheb Hasni Espoire", duration: "04:18" },
    { title: "Tupac Changes", duration: "03:45" },
    { title: "EMINEM Lose your self", duration: "04:08" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
