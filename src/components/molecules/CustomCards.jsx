import React, { useState, useEffect } from 'react';
import MovieList from '../atoms/MovieList';

const CustomCards = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.Response === "True") {
        return data.Search.slice(0, 9).map((movie) => ({
          
          ...movie,
          
          url: `http://www.omdbapi.com/?s=${movie.imdbID}`, 
        }));
      } else {
        console.error("Errore API:", data.Error);
        return [];
      }
    } catch (error) {
      console.error("Errore API:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const movies1 = await fetchMovies("http://www.omdbapi.com/?s=one%20piece&apikey=4f2bbfac");
      const movies2 = await fetchMovies("http://www.omdbapi.com/?s=harry%20potter&apikey=4f2bbfac");
      const movies3 = await fetchMovies("http://www.omdbapi.com/?s=futurama&apikey=4f2bbfac");
    

      setMovies([...movies1, ...movies2, ...movies3]);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ color: 'white', fontSize: '24px', padding: '20px', marginLeft: "25px" }}>Film Preferiti</h1>
      
      <MovieList movies={movies} />
      
    </div>
  );
};

export default CustomCards;