export type MovieState = {
    list: Array<MovieDetail>,
    detail: MovieDetail
    query: string,
    loading: number
}

export type MoviesList = {
    date: object,
    page: number,
    result: Array<any>,
    total_pages: number,
    total_results: number,
}

export type MovieDetail = {
    id: number,
    title: string,
    backdrop_path: string,
    overview: string,
    poster_path: string,
    adult?: boolean,
    budget?: number,
    genres?: Array<MovieGenre>
    imdb_id?: number,
    homepage?: string,
    original_language?: string,
    original_title?: string,
    popularity?: number,
    production_companies?: Array<MovieProductionCompany>,
    production_countries?: Array<MovieProductionCountries>,
    release_date?: string,
    revenue?: number,
    runtime?: number,
    spoken_languages?: Array<MovieSpokenLanguages>
    status?: string,
    tagline?: string,
    video?: string,
    vote_average?: number,
    vote_count?: number
}

export type MovieCardProps = {
    id: number,
    title: string,
    description: string,
    img: string,
}

export type PillProps = {
    id: number,
    name: string
}

export type RatingProps = {
    rating: number
}

export type ImgProps = {
    path: string,
    className?: string
}

type MovieGenre = {
    id: number,
    name: string,
}

type MovieProductionCompany = {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}

type MovieProductionCountries = {
    iso_3166_1: string,
    name: string
}

type MovieSpokenLanguages = {
    english_name: string,
    iso_639_1: string,
    name: string
}


