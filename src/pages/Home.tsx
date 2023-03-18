import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux'
import { getMovies } from '../redux/actions/movieActions'
import { MovieContainer } from "../components/MovieContainer";


export function Home() {
    const dispatch = useDispatch()    
    
    useEffect(() => {
        dispatch(getMovies());
    });
    
    return (
        <>
            <MovieContainer />
        </>
    );
}

