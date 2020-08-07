import React from 'react';
import MenuBar from "../Components/MenuBar";
import {Card, Grid, Header } from 'semantic-ui-react';
import {movies} from "../data.js";

import MovieCard from "../Components/MovieCard";
import Footer from '../Components/Footer';

function Cartelera() {
  return (
    <div className="App" id="bodyCartelera">
     <MenuBar />
     <Header as='h1' id='moviesTitle' className="animated pulse delay-1s">Cartelera</Header>
     
     <Card.Group>
          {
            movies.map(movie => (
              <Grid.Row columns={4}>
                <Grid.Column key={movie.id} className="cardsGroup">
                  <MovieCard key={movie.id} movie={movie} />
                </Grid.Column>
              </Grid.Row>
            ))
          }
     </Card.Group>

     <Footer />
    </div>
  );
}

export default Cartelera;
