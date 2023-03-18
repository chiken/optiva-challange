export type MovieState = {
    list: Array<any>,
    detail: object
}

export type MoviesList = {
    date: object,
    page: number,
    result: Array<any>,
    total_pages: number,
    total_results: number,
}

export type MovieDetail = {
    adult: boolean,
    backdrop_path: string,
    budget: number,
    genres: Array<MovieGenre>
    homepage: string,
    id: number,
    imdb_id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: Array<MovieProductionCompany>,
    production_countries: Array<MovieProductionCountries>,
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: Array<MovieSpokenLanguages>
    status: string,
    tagline: string,
    title: string,
    video: string,
    vote_average: number,
    vote_count: number
}

export type MovieCardProps = {
    title: string,
    description: string,
    img: string,
}

type MovieGenre = {
    id: number,
    name: String,
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


