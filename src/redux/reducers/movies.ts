import {
    SET_MOVIES,
    SET_MOVIE_DETAIL,
    REMOVE_MOVIE_DETAIL
} from '../constants'

import { MovieState, MovieDetail } from '../../types'

export type SetMoviesAction = { type: typeof SET_MOVIES, data: { results: Array<MovieDetail> } };
export type SetMovieDetailAction = { type: typeof SET_MOVIE_DETAIL, data: MovieDetail };
export type RemoveMovieDetailAction = { type: typeof REMOVE_MOVIE_DETAIL };

type MoviesActions =
    | SetMoviesAction
    | SetMovieDetailAction
    | RemoveMovieDetailAction

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
    }
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
        default:
            return state;
    }
};
