import {
    SET_MOVIES,
    SET_MOVIE_DETAIL
} from '../constants'

import { MovieState, MovieDetail } from '../../types'

export type SetMoviesAction = { type: typeof SET_MOVIES; data: { results: Array<MovieDetail> } };
export type SetMovieDetailAction = { type: typeof SET_MOVIE_DETAIL; payload: any };

type MoviesActions =
    | SetMoviesAction
    | SetMovieDetailAction

const moviesState = {
    list: [],
    detail: {}
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
                detail: action.payload,
            };
        default:
            return state;
    }
};
