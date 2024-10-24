import { createSlice } from '@reduxjs/toolkit'

const isGameAddedSlice = createSlice({
	name: 'isAdded',
	initialState: {
		isGameAdded: false,
	},
	reducers: {
		updateBooleanState(state) {
			state.isGameAdded = !state.isGameAdded
		},
	},
})

export const { updateBooleanState } = isGameAddedSlice.actions
export default isGameAddedSlice.reducer
