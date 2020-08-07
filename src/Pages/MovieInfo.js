import React, { useState } from "react";
import MenuBar from "../Components/MenuBar";
import {
  Segment,
  Container,
  Header,
  Grid,
  Image,
  Button,
  Divider,
  Modal
} from "semantic-ui-react";

import TableHours from "../Components/TableHours";
import Footer from "../Components/Footer";
import TableBuy from '../Components/TableBuy';
import SuccessInfo from '../Components/SuccessInfo';

function MovieInfo(props) {
  const { info } = props.location.state;
  const [success, setSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const closeAll = () => {
    setOpenModal(false);
    setSuccess(false);
  }

  return (
    <div className="App">
      <MenuBar />
      <Container style={{ marginTop: "120px" }}>
        <Segment raised>
          <Grid>
            <Grid.Row columns={3} style={{ padding: "20px" }}>

              <Grid.Column width={4}>
                <Image src={info.img} size="medium" />
              </Grid.Column>

              <Grid.Column width={10}>
                <Header as="h1">{info.title}</Header>
                <Header.Subheader>{info.year}</Header.Subheader>
                <TableHours />
              </Grid.Column>

              <Grid.Column width={2}>
                <Button id="btns" onClick={() => setOpenModal(true)}>Comprar entradas</Button>
                <Modal open={openModal}>
                  <Modal.Header>Comprar Entradas</Modal.Header>
                  <Modal.Content>
                    <Modal.Description>
                      <TableBuy priceChildren={info.priceChildren} priceAdult={info.priceAdult} />
                    </Modal.Description>

                    <SuccessInfo msj={success} />
                  </Modal.Content>

                  <Modal.Actions>
                    <Button color="red" onClick={() => closeAll()}>Cancelar</Button>
                    <Button color="green" onClick={() => setSuccess(true)}>Aceptar</Button>
                  </Modal.Actions>

                </Modal>
              </Grid.Column>

            </Grid.Row>

            <Divider />
            <Grid.Row style={{ padding: "50px" }}>
              <Header as="h3" floated="left">
                {info.desc}
              </Header>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>

      <Footer />
    </div>
  );
}

export default MovieInfo;