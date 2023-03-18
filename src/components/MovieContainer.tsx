import { useSelector } from 'react-redux'
import { MovieCard  } from "../components/MovieCard";
import { Loader  } from "../components/Loader";
import { MovieState, MovieDetail } from '../types'

export function MovieContainer() {
    const movies = useSelector((state: MovieState) => state.list);
    const loading = useSelector((state: MovieState) => state.loading);

    const renderLoading = ():any => {
        const nTimes = movies.length > 1 ? movies.length : 10;

        return [...Array(nTimes)].map((movie: MovieDetail, idx: number) => (
            <Loader key={idx} />
        ))
    }

    const renderMovies = (): any => {
        return movies.map((movie: MovieDetail, idx: number) => (
            <MovieCard
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