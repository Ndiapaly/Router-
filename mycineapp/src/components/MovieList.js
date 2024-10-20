import React from 'react';
import { MovieCard } from './MovieCard'; // Import correct

function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard 
          key={index} 
          title={movie.title} 
          description={movie.description} 
          posterURL={movie.posterURL} 
          rating={movie.rating} 
        />
      ))}
    </div>
  );
}

export default MovieList;