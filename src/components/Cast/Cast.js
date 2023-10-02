import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/api';
import { HomeListStyled, HomeItemStyled } from 'pages/Home/Home.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    getCast(movieId)
      .then(data => setCasts(data))
      .catch(err => console.log(err.message));
  }, [movieId]);
  return (
    <Suspense>
      <HomeListStyled>
        {casts.map(({ id, profile_path, name, character }) => (
          <HomeItemStyled key={id}>
            <img
              src={`http://image.tmdb.org/t/p/w154${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </HomeItemStyled>
        ))}
      </HomeListStyled>
    </Suspense>
  );
};
export default Cast;
