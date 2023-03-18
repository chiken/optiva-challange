import React from 'react';
import {useNavigate} from 'react-router-dom';
import { MovieCardProps } from '../types'

const { REACT_APP_TMDB_IMG_BASE_URL: baseURL } = process.env

export const MovieCard = ({ id, title, description, img }: MovieCardProps) => {
    const navigate = useNavigate();
    const handleOnClick = () => navigate(`movie/${id}`);

    return (
        <div className="card col-12 col-sm-6 col-lg-3 p-2 my-2">
            <div className='card-container' onClick={handleOnClick}>
                <img className="card-img-top" src={`${baseURL}${img}`} alt={img} />
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                </div>
            </div>
        </div>
    )
}