import { Link } from "react-router-dom";

export function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Note: {rating}/5</p>
      <Link to={`/movie/${title}`}>Voir la description</Link>
    </div>
  );
}
