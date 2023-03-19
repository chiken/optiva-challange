import {
	SET_MOVIES,
	SET_MOVIE_DETAIL,
	REMOVE_MOVIE_DETAIL,
	SET_QUERY_SEARCH,
	INCREMENT_LOADING,
	DECREMENT_LOADING,
} from "../constants";

import { type MovieState, type MovieDetail } from "../../types";

export interface SetMoviesAction {
	type: typeof SET_MOVIES;
	data: { results: MovieDetail[]; page: number };
}
export interface SetMovieDetailAction {
	type: typeof SET_MOVIE_DETAIL;
	data: MovieDetail;
}
export interface RemoveMovieDetailAction {
	type: typeof REMOVE_MOVIE_DETAIL;
}
export interface SetQuerySearch {
	type: typeof SET_QUERY_SEARCH;
	data: string;
}
export interface IncrementLoading {
	type: typeof INCREMENT_LOADING;
}
export interface DecrementLoading {
	type: typeof DECREMENT_LOADING;
}

type MoviesActions =
	| SetMoviesAction
	| SetMovieDetailAction
	| RemoveMovieDetailAction
	| SetQuerySearch
	| IncrementLoading
	| DecrementLoading;

const moviesState: MovieState = {
	list: [
		{
			id: 0,
			overview: "",
			title: "",
			backdrop_path: "",
			poster_path: "",
		},
	],
	detail: {
		id: 0,
		overview: "",
		title: "",
		backdrop_path: "",
		poster_path: "",
	},
	query: "",
	loading: 0,
	page: 0,
	totalPages: 0,
};

export const movieReducer = (
	state: MovieState = moviesState,
	action: MoviesActions
) => {
	switch (action.type) {
		case SET_MOVIES:
			let list = state.list;

			action.data.page === 1
				? (list = action.data.results)
				: (list = [...list, ...action.data.results]);

			return {
				...state,
				list,
				page: action.data.page,
			};

		case SET_MOVIE_DETAIL:
			return {
				...state,
				detail: action.data,
			};
		case REMOVE_MOVIE_DETAIL:
			return {
				...state,
				detail: moviesState.detail,
			};
		case SET_QUERY_SEARCH:
			return {
				...state,
				query: action.data,
				list: moviesState.list,
				page: moviesState.page,
			};
		case INCREMENT_LOADING:
			return {
				...state,
				loading: (state.loading += 1),
			};
		case DECREMENT_LOADING:
			return {
				...state,
				loading: (state.loading -= 1),
			};
		default:
			return state;
	}
};
