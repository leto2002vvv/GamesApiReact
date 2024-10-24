import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
	name: 'games',
	initialState: {
		games: [],
		transformedGames: []
	},
	reducers: {
		getGames(state, action) {
			state.games = action.payload
			console.log(state.games);
		},
		getTransformedGames(state, action) {
			state.transformedGames = action.payload
			console.log(state.transformedGames);
		},
	},
})

export const { getGames, getTransformedGames } = gameSlice.actions
export default gameSlice.reducer
