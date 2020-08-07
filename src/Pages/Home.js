import React from 'react';
import {List, Container, Image, Segment, Header, Card, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {imgMini} from '../data';

import MenuBar from "../Components/MenuBar";
import Footer from '../Components/Footer';

function Home() {

  const imgMini = 'https://i7.pngguru.com/preview/1022/338/397/movie-icons-film-clapperboard-cinema-icon-movie-clapper-cliparts.jpg';
  
  return (
    <div className="App">
      <MenuBar />

      <Segment id="hero">
        <Header as="h1" id="title" className="animated pulse delay-1s">Cinema Fast</Header>
        <Header as="h1" id="subtitle" className="animated pulse delay-2s">El cine #1 de tu ciudad</Header>
      </Segment>

      <Button 
        size="massive" 
        id="btns" 
        style={{marginTop: "30px"}}
        as={Link}
	      to="/Cartelera"
      >
        Ver Cartelera
      </Button>

      <Container>
        <Card fluid header='Numero de telefono:' style={{padding: "30px", marginTop: "30px"}}>
          <Header as="h1">Nuestro numero de telefono: <p id="extrainfo">3571418827</p></Header>
          <Header as="h1">Direccion: <p id="extrainfo">Díaz Vélez Sársfield 143, Río Tercero, Córdoba</p></Header>
        </Card>
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
