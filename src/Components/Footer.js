import React from "react";
import { Segment, List, Image } from "semantic-ui-react";
import {imgMini} from '../data';

function Footer() {
  return (
    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Image centered size="mini" src={imgMini} />
      <List horizontal inverted divided link size="small">
        <List.Item as="a" href="#">
          Site Map
        </List.Item>
        <List.Item as="a" href="#">
          Contactanos
        </List.Item>
        <List.Item as="a" href="#">
          Terminos y condiciones
        </List.Item>
        <List.Item as="a" href="#">
          Politicas
        </List.Item>
      </List>
    </Segment>
  );
}

export default Footer;