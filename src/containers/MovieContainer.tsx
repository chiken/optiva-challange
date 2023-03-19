import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { useSearchParams } from "react-router-dom"
import { getMovies, setSearchQuery } from '../redux/actions/movieActions'
import { MovieState, MovieDetail } from '../types'
import { MovieCardComponent, SpinnerComponent  } from "../components";

export function MovieContainer() {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();

    const movies = useSelector((state: MovieState) => state.list);
    const loading = useSelector((state: MovieState) => state.loading);
    let actualPage = useSelector((state: MovieState) => state.page);

    useEffect(() => {
        dispatch(setSearchQuery(searchParams.get('q') || ''));
    }, [dispatch]);

    const renderLoading = ():any => {
        if(loading)
            return (
                <div className='col-12 d-flex justify-content-center py-5'>
                    <SpinnerComponent />
                </div>
            )
    }

    const handleLoadMore = () => {
        const nextPage = actualPage += 1
        dispatch(getMovies(nextPage))
    }

    const renderLoadMoreButton = (): any => {
        if(movies.length > 1 && !loading)
            return ( 
                <button className='my-5' onClick={handleLoadMore}> LOAD MORE</button>
            )
    }

    const renderMovies = (): any => {
        if(movies.length > 1)
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
            { renderMovies() }
            { renderLoading() } 
            { renderLoadMoreButton() }
        </div>
    );
}