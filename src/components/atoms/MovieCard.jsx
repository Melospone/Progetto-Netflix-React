import React from 'react';
import { Card } from 'react-bootstrap';



const MovieCard = ({ poster, title }) => {
  return (
    <Card className='card'
      style={{
        backgroundColor: "#212529",
        width: "15rem",
        margin: "10px",
        gap: "4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        border: "none"
      }}
    >
      <Card.Img
        style={{
          width: "100%", 
          maxHeight: "80%", 
        }}
        src={poster}
      />
      <Card.Body style={{ position: "absolute", bottom: 0, width: "90%",backgroundColor: "#212529" }}>
        <h6 style={{ textAlign: "center", color: "white" }}>{title}</h6>
      </Card.Body>
    </Card>
    
  );
};

export default MovieCard;