import {
    SET_MOVIES,
    SET_MOVIE_DETAIL,
    REMOVE_MOVIE_DETAIL
} from '../constants'

import { fetchData } from '../../api'

const { REACT_APP_TMDB_API_KEY: apiKey } = process.env

export function getMovies(): any { 
    return (dispatch: (arg0: { type: string; data: any; }) => void) => {
        return fetchData(`movie/now_playing?api_key=${apiKey}`).then(result => {
            dispatch({
                type: SET_MOVIES,
                data: result.data
            });
        });
    };
}

export function getMovieDetail(movieId: string): any {    
    return (dispatch: (arg0: { type: string; data: any; }) => void) => {
        return fetchData(`movie/${movieId}?api_key=${apiKey}`).then(result => {
            dispatch({
                type: SET_MOVIE_DETAIL,
                data: result.data
            });
        });
    };
}

export function removeMovieDetail(): any {    
    return (dispatch: (arg0: { type: string; }) => void) => {
        dispatch({ type: REMOVE_MOVIE_DETAIL });
    };
}