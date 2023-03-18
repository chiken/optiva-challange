import {
    SET_MOVIES,
    SET_MOVIE_DETAIL,
    REMOVE_MOVIE_DETAIL,
    SET_QUERY_SEARCH
} from '../constants'

import { MovieState, MovieDetail } from '../../types'

export type SetMoviesAction = { type: typeof SET_MOVIES, data: { results: Array<MovieDetail> } };
export type SetMovieDetailAction = { type: typeof SET_MOVIE_DETAIL, data: MovieDetail };
export type RemoveMovieDetailAction = { type: typeof REMOVE_MOVIE_DETAIL };
export type SetQuerySearch = { type: typeof SET_QUERY_SEARCH, data: string };

type MoviesActions =
    | SetMoviesAction
    | SetMovieDetailAction
    | RemoveMovieDetailAction
    | SetQuerySearch

const moviesState = {
    list: [{
        id: 0,
        overview: '',
        title: '',
        backdrop_path: '',
        poster_path: '',
    }],
    detail: {
        id: 0,
        overview: '',
        title: '',
        backdrop_path: '',
        poster_path: '',
    },
    query: ''
};    

export const movieReducer = (state: MovieState = moviesState, action: MoviesActions) => {
    switch (action.type) {
        case SET_MOVIES:         
            return {
                ...state,
                list: action.data.results,
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
            };
        default:
            return state;
    }
};
