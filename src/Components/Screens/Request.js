export const API_KEY = "9731517a487abeeceb545a8adf0cc953";
export const BaseURL = "https://api.themoviedb.org/3";
export const IMAGE_URL =  "https://image.tmdb.org/t/p/original"

// https://www.googleapis.com/youtube/v3/videos

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

//https://api.themoviedb.org/3/trending/all/week?api_key=9731517a487abeeceb545a8adf0cc953&language=en-US