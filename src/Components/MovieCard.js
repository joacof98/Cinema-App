import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";
import {Link} from 'react-router-dom';

function MovieCard(props) {
  const { id, title, img, year } = props.movie;
  
  return (
    <div className="App">
      <Card raised>
        <img src={img} height="400px" />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className="date">{year}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Link 
          to={{pathname: `/pelicula/${id}`, state: {info: props.movie}}} >
            <a>
                <Icon name="time" />
                Ver horarios e información
            </a>
          </Link>
        </Card.Content>
      </Card>
    </div>
  );
}

export default MovieCard;
