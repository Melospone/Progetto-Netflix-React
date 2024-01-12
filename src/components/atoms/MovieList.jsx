import React from 'react';
import MovieCard from './MovieCard';
import { Container, Row } from "react-bootstrap";

const MovieList = ({ movies }) => {
    return(
  <Container className='"d-flex flex-wrap'>
  <Row>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} url={movie.url} />
      ))}
      </Row>
  </Container>
);}

export default MovieList;