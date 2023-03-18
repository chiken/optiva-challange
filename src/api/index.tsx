import axios from 'axios'

const { REACT_APP_TMDB_API_BASE_URL: baseUrl } = process.env

export async function fetchData (urlPath: string) {
    const options = {
        method: 'GET',
        url: baseUrl + urlPath,
    }

    return await axios.request(options)
}
