import { useSelector } from 'react-redux'
import { MovieState, MovieDetail } from '../types'
import { PillComponent, ImgComponent } from './index'

export const MovieDetailComponent = () => {
    const movie: MovieDetail = useSelector((state: MovieState) => state.detail);
    
    const renderPills = () => {
        return movie.genres?.map((genre) => (
            <PillComponent 
                key={genre.id}
                id={genre.id}
                name={genre.name}
            />
        ))
    }
    
    return (
        <div className='row'>
            <div className='row pt-5'>
                <ImgComponent path={movie.poster_path} className="col-12 col-md-4" />
                    
                <div className='col-12 col-md-8 px-4 pt-4 pt-md-0'>
                    <h1> { movie.title } </h1>
                    <span> { movie.overview } </span>
                    <div className='pt-2 d-flex flex-wrap'>
                        { renderPills() }
                    </div>
                </div>
            </div>
        </div>
    )
}