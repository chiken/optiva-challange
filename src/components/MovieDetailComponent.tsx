import { useSelector } from "react-redux";
import { type MovieState, type MovieDetail } from "../types";
import { PillComponent, ImgComponent } from "./index";

export const MovieDetailComponent = (): JSX.Element => {
	const movie: MovieDetail = useSelector((state: MovieState) => state.detail);

	const renderPills = (): JSX.Element[] | undefined => {
		return movie.genres?.map((genre) => (
			<PillComponent key={genre.id} id={genre.id} name={genre.name} />
		));
	};

	const year = new Date(movie.release_date).getFullYear();

	return (
		<div className="row pt-5">
			<ImgComponent path={movie.backdrop_path} className="col-12" />

			<div className="col-12 col-md-10 d-flex flex-column">
				<h1 className="movie-detail-title">
					{movie.title}
					<span className="movie-year"> ({year}) </span>
				</h1>
				<span> {movie.overview} </span>
				<div className="pt-2 d-flex flex-wrap">{renderPills()}</div>
			</div>
		</div>
	);
};
