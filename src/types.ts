export interface MovieState {
	list: MovieDetail[];
	detail: MovieDetail;
	query: string;
	loading: number;
	page: number;
	totalPages: number;
}

export interface MoviesList {
	date: object;
	page: number;
	result: any[];
	total_pages: number;
	total_results: number;
}

export interface MovieDetail {
	id: number;
	title: string;
	backdrop_path: string;
	overview: string;
	poster_path: string;
	adult?: boolean;
	budget?: number;
	genres?: MovieGenre[];
	imdb_id?: number;
	homepage?: string;
	original_language?: string;
	original_title?: string;
	popularity?: number;
	production_companies?: MovieProductionCompany[];
	production_countries?: MovieProductionCountries[];
	release_date?: string;
	revenue?: number;
	runtime?: number;
	spoken_languages?: MovieSpokenLanguages[];
	status?: string;
	tagline?: string;
	video?: string;
	vote_average?: number;
	vote_count?: number;
}

export interface MovieCardProps {
	id: number;
	title: string;
	description: string;
	img: string;
}

export interface PillProps {
	id: number;
	name: string;
}

export interface RatingProps {
	rating: number;
}

export interface ImgProps {
	path: string;
	className?: string;
}

interface MovieGenre {
	id: number;
	name: string;
}

interface MovieProductionCompany {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

interface MovieProductionCountries {
	iso_3166_1: string;
	name: string;
}

interface MovieSpokenLanguages {
	english_name: string;
	iso_639_1: string;
	name: string;
}
