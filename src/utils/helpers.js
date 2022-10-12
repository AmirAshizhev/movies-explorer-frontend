const imageBaseUrl = "https://api.nomoreparties.co/" 

export const storage = {
  getItem: (item) => {
    return JSON.parse(localStorage.getItem(item));
  },
  setItem: (item, value) => {
    localStorage.setItem(item, JSON.stringify(value));
  },
  clear: () => {
    localStorage.clear();
  },
};

export function changingMovieData(movies) {
  const changedMovie = movies.map((movie) => ({
    country: movie.country || 'noData',
    description: movie.description || 'noData',
    director: movie.director || 'noData',
    duration: movie.duration,
    image: imageBaseUrl + movie.image.url,
    nameEN: movie.nameEN || movie.nameRU,
    nameRU: movie.nameRU || movie.nameEN,
    trailerLink: movie.trailerLink,
    year: movie.year,
    movieId: movie.id,
    thumbnail: imageBaseUrl + movie.image.formats.thumbnail.url
  }))


  return changedMovie
}