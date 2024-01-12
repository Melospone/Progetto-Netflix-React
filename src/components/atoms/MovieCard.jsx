import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const MovieCard = ({ poster }) => {
  return (
    
      
        <Card
          style={{
            width: "15rem",
            margin: "10px",
            gap: "5px",
            marginBottom: "150px",
          }}
        >
          <Card.Img variant="top" src={poster} />
        </Card>
      
    
  );
};

export default MovieCard;
