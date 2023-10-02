import { useEffect, useState } from 'react';
import { getTrending } from 'service/api';
import { HomeListStyled, HomeTitle } from './Home.styled';
import TrandingItem from 'components/TrandingList/MovieItem';

const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    getTrending()
      .then(data => {
        setMoviesTrending(data);
        setLoading(false);
      })
      .catch(err => setErr(err.response.data));
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {err && <p>{err}</p>}
      <HomeTitle>Trending movie</HomeTitle>
      <HomeListStyled>
        {moviesTrending.map(movie => (
          <TrandingItem movies={movie} key={movie.id} />
        ))}
      </HomeListStyled>
    </>
  );
};

export default Home;
