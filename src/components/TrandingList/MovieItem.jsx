import { HomeItemStyled } from 'pages/Home/Home.styled';
// import image from '/assets/icon-image-not-found.jpeg';
// console.log(image);

import { Link, useLocation } from 'react-router-dom';

import image from 'icon-image-not-found.jpeg';

const MovieItem = ({ movies: { poster_path, title, id, name } }) => {
  const location = useLocation();
  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <HomeItemStyled>
        {poster_path ? (
          <img
            src={`http://image.tmdb.org/t/p/w154${poster_path}`}
            alt={title}
          />
        ) : (
          <img src={image} alt="not found" />
        )}

        {title ? <p>{title}</p> : <p>{name}</p>}
      </HomeItemStyled>
    </Link>
  );
};

export default MovieItem;
