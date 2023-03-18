import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'


import { useDispatch } from 'react-redux'
import { getMovieDetail, removeMovieDetail } from '../redux/actions/movieActions'
import { MovieDetailView } from "../components/MovieDetailView";

export function MovieDetail() {
    const dispatch = useDispatch()
    const movieId: string = useParams().id || '';

    useEffect(() => {
        dispatch(getMovieDetail(movieId));

        return () => {
            dispatch(removeMovieDetail())
          }
    });

    return ( <MovieDetailView /> )
}

