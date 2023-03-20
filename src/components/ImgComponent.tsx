import { type ImgProps } from "../types";

import Img from "../assets/img-no-available.jpeg";

const { REACT_APP_TMDB_IMG_BASE_URL: baseURL = "" } = process.env;

export const ImgComponent = ({ path, className }: ImgProps): JSX.Element => {
	const img = path === null || path.length === 0 ? Img : `${baseURL}${path}`;

	return <img className={className} src={img} alt={path} />;
};
