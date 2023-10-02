import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'service/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    getReviews(movieId)
      .then(data => setReviews(data))
      .catch(err => console.log(err.message));
  }, [movieId]);
  return (
    <Suspense>
      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </Suspense>
  );
};
export default Reviews;
