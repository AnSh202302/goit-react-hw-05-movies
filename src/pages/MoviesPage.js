import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieForSearch } from 'service/api';
import Form from 'components/Form/Form';
import { HomeListStyled } from './Home/Home.styled';
import TrandingItem from 'components/TrandingList/MovieItem';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';
  // const visibleMovie = movie.filter(m => m.includes(searchQuery));

  useEffect(() => {
    if (!searchQuery) return;
    // if (movie.length === 0) return;
    getMovieForSearch(searchQuery)
      .then(data => setMovies(data))
      .catch(err => console.log(err.message));
  }, [searchQuery]);

  const handleFormSubmit = searchValue => {
    searchValue === ''
      ? setSearchParams({})
      : setSearchParams({ query: searchValue });
  };
  return (
    <Suspense>
      <Form onSubmit={handleFormSubmit} />
      <HomeListStyled>
        {movies &&
          movies.map(movie => <TrandingItem movies={movie} key={movie.id} />)}
      </HomeListStyled>
    </Suspense>
  );
};
export default Movies;
