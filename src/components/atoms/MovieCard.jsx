import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ poster, title }) => {
  return (
    <Card
      style={{
        backgroundColor: "#222",
        width: "15rem",
        margin: "10px",
        gap: "4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Card.Img
        style={{
          width: "100%", 
          maxHeight: "70%", 
          objectFit: "cover",
        }}
        variant="top"
        src={poster}
      />
      <Card.Body style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <h6 style={{ textAlign: "center", color: "white" }}>{title}</h6>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;