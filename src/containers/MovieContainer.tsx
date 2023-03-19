import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { getMovies } from '../redux/actions/movieActions'
import { MovieState, MovieDetail } from '../types'
import { MovieCardComponent, LoaderComponent  } from "../components";

export function MovieContainer() {
    const dispatch = useDispatch()    

    const movies = useSelector((state: MovieState) => state.list);
    const loading = useSelector((state: MovieState) => state.loading);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    const renderLoading = ():any => {
        const nTimes = movies.length > 1 ? movies.length : 10;

        return [...Array(nTimes)].map((movie: MovieDetail, idx: number) => (
            <LoaderComponent key={idx} />
        ))
    }

    const renderMovies = (): any => {
        return movies.map((movie: MovieDetail, idx: number) => (
            <MovieCardComponent
                key={idx}
                id={movie.id}
                title={movie.title}
                description={movie.overview}
                img={movie.poster_path}
            />
        )) 
    }

    return (
        <div className="row">   
            { loading > 0 
                ? renderLoading() 
                : renderMovies()
            }
        </div>
    );
}