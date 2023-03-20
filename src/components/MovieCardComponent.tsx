import React from "react";
import { useNavigate } from "react-router-dom";
import { type MovieCardProps } from "../types";
import { ImgComponent } from "./index";

export const MovieCardComponent = ({
	id,
	title,
	description,
	img,
}: MovieCardProps): JSX.Element => {
	const navigate = useNavigate();
	const handleOnClick = (): void => {
		navigate(`${id}`);
	};

	return (
		<div className="card col-12 col-sm-6 col-lg-3 p-2 my-2">
			<div className="card-container" onClick={handleOnClick}>
				<ImgComponent path={img} className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
				</div>
			</div>
		</div>
	);
};
