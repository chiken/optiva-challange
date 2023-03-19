import {
	SET_MOVIES,
	SET_MOVIE_DETAIL,
	REMOVE_MOVIE_DETAIL,
	SET_QUERY_SEARCH,
	INCREMENT_LOADING,
	DECREMENT_LOADING,
} from "../constants";

import { fetchData } from "../../api";

const { REACT_APP_TMDB_API_KEY: apiKey } = process.env;

export function getMovies(page = 1): any {
	return (dispatch: any, getState: any) => {
		dispatch(incrementLoading());

		const query = getState().query;
		let url = "";

		if (!query) {
			url = `movie/now_playing?api_key=${apiKey}`;
		} else {
			url = `search/movie?api_key=${apiKey}&query=${query}`;
		}

		url += `&page=${page}`;

		setTimeout(async () => {
			await fetchData(url).then((result) => {
				dispatch({
					type: SET_MOVIES,
					data: result.data,
				});

				dispatch(decrementLoading());
			});
		}, 2000);
	};
}

export function getMovieDetail(movieId: string): any {
	return async (dispatch: (arg0: { type: string; data: any }) => void) => {
		await fetchData(`movie/${movieId}?api_key=${apiKey}`).then((result) => {
			dispatch({
				type: SET_MOVIE_DETAIL,
				data: result.data,
			});
		});
	};
}

export function removeMovieDetail(): any {
	return (dispatch: (arg0: { type: string }) => void) => {
		dispatch({ type: REMOVE_MOVIE_DETAIL });
	};
}

export function setSearchQuery(value: string): any {
	return (dispatch: (arg0: { type: string; data: string }) => void) => {
		dispatch({
			type: SET_QUERY_SEARCH,
			data: value,
		});

		dispatch(getMovies());
	};
}

export function incrementLoading() {
	return (dispatch: (arg0: { type: string }) => void) => {
		dispatch({ type: INCREMENT_LOADING });
	};
}

export function decrementLoading() {
	return (dispatch: (arg0: { type: string }) => void) => {
		dispatch({ type: DECREMENT_LOADING });
	};
}
