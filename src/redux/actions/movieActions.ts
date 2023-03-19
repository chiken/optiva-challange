// /* eslint-disable @typescript-eslint/no-unsafe-argument */
// /* eslint-disable @typescript-eslint/no-unsafe-member-access */
// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /* eslint-disable @typescript-eslint/no-unsafe-call */

import {
	SET_MOVIES,
	SET_MOVIE_DETAIL,
	REMOVE_MOVIE_DETAIL,
	SET_QUERY_SEARCH,
	INCREMENT_LOADING,
	DECREMENT_LOADING,
} from "../constants";

import { fetchData } from "../../api";
import {
	type DataResponseMovieDetail,
	type MovieDetail,
	type MovieState,
} from "../../types";

const { REACT_APP_TMDB_API_KEY: apiKey = "" } = process.env;

export function getMovies(page = 1): any {
	return async (dispatch: any, getState: () => MovieState) => {
		dispatch(incrementLoading());
		const state: MovieState = getState();
		const query = state.query;
		let url = "";

		if (query.length > 0) {
			url = `search/movie?api_key=${apiKey}&query=${query}`;
		} else {
			url = `movie/now_playing?api_key=${apiKey}`;
		}

		url += `&page=${page}`;

		await fetchData(url).then((result) => {
			console.log(result);

			dispatch({
				type: SET_MOVIES,
				data: result.data,
			});
			dispatch(decrementLoading());
		});
	};
}

export function getMovieDetail(movieId: string): any {
	return async (
		dispatch: (arg0: { type: string; data: MovieDetail }) => void
	) => {
		await fetchData(`movie/${movieId}?api_key=${apiKey}`).then(
			(result: DataResponseMovieDetail) => {
				console.log(result);

				dispatch({
					type: SET_MOVIE_DETAIL,
					data: result.data,
				});
			}
		);
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
