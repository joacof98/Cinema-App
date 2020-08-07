import React from 'react';
import {Menu, Image, Container} from "semantic-ui-react";
import {Link} from "react-router-dom";

function MenuBar() {

    const imgMini = 'https://i7.pngguru.com/preview/1022/338/397/movie-icons-film-clapperboard-cinema-icon-movie-clapper-cliparts.jpg';
    const pathname = window.location.pathname;
    const path = pathname === '/' ? "home" : pathname.substr(1);
      
    return(
        <div className="menub">
        <Menu fixed='top' inverted id="menuBar">
            <Container>
                <Menu.Item as='a' header>
                <Image circular size='mini' src={imgMini} style={{ marginRight: '1.5em' }} />
                Cinema Fast
                </Menu.Item>
            </Container>

            <Menu.Item as={Link} to="/" active={path === 'home'}>Home</Menu.Item>
            <Menu.Item as={Link} to="/Cartelera" active={path !== 'home'}>Cartelera</Menu.Item>
        </Menu>
        </div>
    );


}

export default MenuBar;