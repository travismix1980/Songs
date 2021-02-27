import { combineReducers } from 'redux';

// reducers duh!!!
const songsReducer = () => {
	return [
		{ title: 'Smells Like Teen Spirit', band: 'Nirvana', duration: '4:39' },
		{ title: 'Nothing Else Matters', band: 'Metallica', duration: '6:26' },
		{ title: 'Losing My Religion', band: 'R.E.M.', duration: '4:54' },
		{ title: 'Zombie', band: 'The Cranberries', duration: '5:08' },
		{ title: 'Dont Speak', band: 'No Doubt', duration: '5:04' },
		{ title: 'Linger', band: 'The Cranberries', duration: '4:38' },
		{ title: 'The Man Who Sold The World', band: 'Nirvana', duration: '3:38' },
		{title: 'Mambo No. 5', band: 'Lou Bega', duration: '3:42'}
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});