export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: 'process.env.TMDB_API_KEY',
    headers: {
        accept:'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    }
}

export const fetchMovies = async ({query}:{query:string}) => {
    const endpoint = query
    ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` //RETURN MOVIES BASED ON QUERY
    :`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`; //RETURN POPULAR MOVIES
    const response = await fetch(endpoint, {
        method: 'GET',
        headers:TMDB_CONFIG.headers,
    })      
    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }  
    
    const data = await response.json();
    return data.results;
}