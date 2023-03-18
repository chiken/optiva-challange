import { useSelector } from 'react-redux'
import { MovieCard  } from "../components/MovieCard";
import { MovieState, MovieDetail } from '../types'

export function MovieContainer() {
    const movies = useSelector((state: MovieState) => state.list);
    
    return (
        <div className="row">
            { movies.map((movie: MovieDetail, idx: number) => (
                <MovieCard
                    key={idx}
                    id={movie.id}
                    title={movie.title}
                    description={movie.overview}
                    img={movie.poster_path}
                />
            )) }
        </div>
    );
}