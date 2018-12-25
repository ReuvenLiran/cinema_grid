const getData = (restParams) => {
    const API = 'https://api.themoviedb.org/3/';
    const API_KEY_PARAM = '&api_key=1016cccfb6b5b519b1f1f19ea090026e';
    const url = `${API}${restParams}${API_KEY_PARAM}`;
    return fetch(url);
}

export const getMovies = async () => {
    const resp = await getData('movie/popular?page=1&language=en-US');
    const { results: rawMovies} = await resp.json();
    const moviesIds = [];
    const movies = rawMovies.map(m => {
     const {
      genre_ids,
      id,
      poster_path,
      release_date,
      runtime,
      title,
     } = m;
     moviesIds.push(id);
      return ({
        genreIds: genre_ids,
        id,
        poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
        releaseDate: release_date,
        title,
        runtime,
      });
    });
    return movies;
};

export const getMoviesDetails = async (moviesIds) => {
    const getMovieDetailsApiURL = id =>  getData(`movie/${id}?`);    
    const fetches = moviesIds.map(getMovieDetailsApiURL);
    const responses = await Promise.all(fetches);
    return responses;
}

export const getMoviesRuntime = async (moviesIds) => {
    const responses = await getMoviesDetails(moviesIds);
    const runtimes = {};
    responses.forEach(async details => {
        const { id, runtime } = await details.json();
        runtimes[id] = runtime;
    });

    return runtimes;
}

export const getDirectors = async (moviesIds) => {
    const getMovieCrewApiURL = id =>  getData(`movie/${id}/credits?`);    
    const fetches = moviesIds.map(getMovieCrewApiURL);
    const credits = await Promise.all(fetches);
    
    const directors = {};
    credits.forEach(async credit => {
        const { id, crew } = await credit.json();
        const { name: directorName } = crew.find(c => c.job === 'Director');
        directors[id] = directorName;
    });

    return directors;
};
  
export const getGenres = async () => {
    const result = await getData('genre/movie/list?language=en-US');
    const { genres } = await result.json();
    return genres;
}