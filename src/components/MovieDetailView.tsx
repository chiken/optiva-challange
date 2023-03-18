import React from 'react';

import { useSelector } from 'react-redux'
import { MovieState, MovieDetail } from '../types'

const { REACT_APP_TMDB_IMG_BASE_URL: baseURL } = process.env


export const MovieDetailView = () => {
    const movie: MovieDetail = useSelector((state: MovieState) => state.detail);
    
    return (
        <div className='row'>   
            <img className='col-12 col-md-4' src={`${baseURL}${movie.poster_path}`} alt="" />
            <div className='col-12 col-md-8'>
                <h2> { movie.title } </h2>
                <div>
                    { movie.overview }
                </div>
            </div>
        </div>
    )
}