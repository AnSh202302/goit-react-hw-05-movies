import axios from 'axios';
const API_KEY = '442ff10e391dca106acaf7976f811d0c';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: API_KEY };

export async function getTrending() {
  const { data } = await axios.get('trending/all/day', {});
  return data.results;
}

export async function getMovieForSearch(searchQuery) {
  const { data } = await axios.get(`/search/movie?query=${searchQuery}`, {});
  return data.results;
}

export async function getDetalisMovie(movieId) {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
}

export async function getCast(movieId) {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data.cast;
}

export async function getReviews(movieId) {
  const { data } = await axios.get(`movie/${movieId}/reviews`);
  return data.results;
}
