import React from 'react';
import MovieCard from './MovieCard';
import { Container, Row } from "react-bootstrap";

const MovieList = ({ movies }) => {
  return (
    <>
    
      <Container fluid className="d-flex flex-wrap ms-5">
        <Row>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} url={movie.url} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MovieList;