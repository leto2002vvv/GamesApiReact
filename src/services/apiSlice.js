import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY } from '../../config.js'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api/' }),
	endpoints: builder => ({
		getGames: builder.query({
			query: term => `games?search=${term}&key=${API_KEY}`,
			transformResponse: response => {
				return response.results.map(game => ({
					...game,
					released: new Date(game.released),
				}))
			},
		}),
	}),
})

export const { useGetGamesQuery } = apiSlice

