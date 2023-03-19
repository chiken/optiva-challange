import { type ImgProps } from "../types";

const { REACT_APP_TMDB_IMG_BASE_URL: baseURL } = process.env;

export const ImgComponent = ({ path, className }: ImgProps) => {
	return <img className={className} src={`${baseURL}${path}`} alt={path} />;
};
