export const getMovies = async () => {
    const GET_POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=1016cccfb6b5b519b1f1f19ea090026e';
    const resp = await fetch(GET_POPULAR_MOVIES_URL);
    const { results: rawMovies} = await resp.json();
    const moviesIds = [];
    const movies = rawMovies.map(m => {
     const {
      genre_ids,
      id,
      poster_path,
      release_date,
      title,
     } = m;
     moviesIds.push(id);
      return ({
        genre_ids,
        id,
        poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
        release_date,
        title,
      });
    });
    console.log({
      movies
    });
    return movies;
};

export const getDirectors = async (moviesIds) => {
    const getMovieCrewApiURL = id => {
        const GET_MOVIE_CREW = `https://api.themoviedb.org/3/movie/${id}/credits?&api_key=1016cccfb6b5b519b1f1f19ea090026e`;
        return fetch(GET_MOVIE_CREW);
    };
    const fetches = moviesIds.map(getMovieCrewApiURL);
    const credits = await Promise.all(fetches);
    
    const directors = [];
    credits.forEach(async credit => {
        const { id, crew } = await credit.json();
        const { name: directorName } = crew.find(c => c.job === 'Director');
        directors.push({
            id,
            directorName,
        });
    });

    return directors;
};
  