import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useSearchParams } from "react-router-dom";
import { getMovies, setSearchQuery } from "../redux/actions/movieActions";
import { type MovieState, type MovieDetail } from "../types";
import { MovieCardComponent, SpinnerComponent } from "../components";

export function MovieContainer(): JSX.Element {
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();

	const movies = useSelector((state: MovieState) => state.list);
	const loading = useSelector((state: MovieState) => state.loading);
	let actualPage = useSelector((state: MovieState) => state.page);

	useEffect(() => {
		const queryParam: string =
			searchParams.get("q") !== null
				? (searchParams.get("q") as string)
				: "";
		dispatch(setSearchQuery(queryParam));
	}, [dispatch]);

	const renderLoading = (): any => {
		if (loading > 0)
			return (
				<div className="col-12 d-flex justify-content-center py-5">
					<SpinnerComponent />
				</div>
			);
	};

	const handleLoadMore = (): void => {
		const nextPage = (actualPage += 1);
		dispatch(getMovies(nextPage));
	};

	const renderLoadMoreButton = (): any => {
		if (movies.length > 1 && loading === 0) {
			return (
				<button
					className="my-5 load-more-button"
					onClick={handleLoadMore}
				>
					LOAD MORE
				</button>
			);
		}
	};

	const renderMovies = (): any => {
		if (movies.length > 1)
			return movies.map((movie: MovieDetail, idx: number) => (
				<MovieCardComponent
					key={idx}
					id={movie.id}
					title={movie.title}
					description={movie.overview}
					img={movie.poster_path}
				/>
			));
	};

	return (
		<div className="row">
			{renderMovies()}
			{renderLoading()}
			{renderLoadMoreButton()}
		</div>
	);
}
