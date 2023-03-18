import { MovieCardProps } from '../types'

export const MovieCard = ({ title, description, img }: MovieCardProps) => {
    return (
        <div className="card col-3" >
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/original${img}`} alt={img} />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
            </div>
        </div>
    )
}