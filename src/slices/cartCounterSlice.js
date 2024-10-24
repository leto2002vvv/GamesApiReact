import { createSlice } from '@reduxjs/toolkit'

const cartCounterSlice = createSlice({
	name: 'cartItems',
	initialState: {
		itemsInCart: [],
	},
	reducers: {
		addItem(state, action) {
			const alreadyAddedItem = state.itemsInCart.findIndex(
				item => JSON.stringify(item) === JSON.stringify(action.payload)
			)
			if (alreadyAddedItem === -1) {
				state.itemsInCart.push([action.payload])
			} else {
				// if item exists in alreadyAddedItem, do nothing
			}
		},
		removeItem(state, action) {
			state.itemsInCart = state.itemsInCart.filter(arr =>
				!arr.some(item => item.id === action.payload.id)
			)
		},
	},
})

export const { addItem, removeItem } = cartCounterSlice.actions
export default cartCounterSlice.reducer
