import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
	getMovieDetail,
	removeMovieDetail,
} from "../redux/actions/movieActions";
import { MovieDetailComponent } from "../components";

export function MovieDetailContainer(): JSX.Element {
	const dispatch = useDispatch();
	const movieId: string = useParams().id as string;

	useEffect(() => {
		dispatch(getMovieDetail(movieId));

		return () => {
			dispatch(removeMovieDetail());
		};
	});

	return <MovieDetailComponent />;
}
