const APIKEY = "9e09fa1238b4a2332271ecf4e20112a3";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetFlicksOriginals: `/discover/tv?api_key=${APIKEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_generes=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_generes=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_generes=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_generes=99`,
}

export default requests;