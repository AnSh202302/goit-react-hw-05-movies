import { useEffect, useRef, useState, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getDetalisMovie } from 'service/api';
import image from 'icon-image-not-found.jpeg';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationReF = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);
    getDetalisMovie(movieId)
      .then(data => {
        setMovieDetails(data);
        setLoading(false);
      })
      .catch(err => setErr(err.response.data));
  }, [movieId]);
  return (
    <Suspense fallback={<h2>loading</h2>}>
      {loading && <p>Loading...</p>}
      {err && <p>{err}</p>}

      <h1> MovieDetails</h1>
      <Link to={backLinkLocationReF.current}>Back to movies</Link>
      <div>
        {movieDetails.poster_path ? (
          <img
            src={`http://image.tmdb.org/t/p/w154${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        ) : (
          <img src={image} alt="not found" width={154} />
        )}

        <h1>{movieDetails.title}</h1>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
        <h2>Genres</h2>
        <ul>
          {movieDetails.genres?.map(g => (
            <li key={g.id}>{g.name}</li>
          ))}
        </ul>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </Suspense>
  );
};
export default MovieDetails;
