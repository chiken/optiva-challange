
type MovieCardProps = {
    title: string,
    description: string,
    img: string,
}

export const MovieCard = ({ title, description, img }: MovieCardProps) => {
    return (
        <div className="card col-3" >
            <img className="card-img-top" src={img} alt={img} />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text"> { description } </p>
            </div>
        </div>
    )
}