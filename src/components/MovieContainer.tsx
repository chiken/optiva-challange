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
                    title={movie.title}
                    description={movie.overview}
                    img={movie.backdrop_path}
                />
            )) }
        </div>
    );
}