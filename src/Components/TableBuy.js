import React, { useState } from 'react';
import {Table, Button, Header} from 'semantic-ui-react';

function TableBuy(props){
    const [children, setChildren] = useState(0);
    const [adult, setAdult] = useState(0);
    const [totalChildren, setTotalChildren] = useState(0);
    const [totalAdult, setTotalAdult] = useState(0);

    const handleAdult = (type) => {
      if(type === "m"){
        if(adult !== 0){
          setAdult(adult - 1);
          setTotalAdult((adult - 1) * props.priceAdult);
        }
      } else {
        setAdult(adult + 1);
        setTotalAdult((adult + 1) * props.priceAdult);
      }
    }

    const handleChildren = (type) => {
      if(type === "m"){
        if(children !== 0){
          setChildren(children - 1);
          setTotalChildren((children - 1) * props.priceChildren);
        }
      } else {
        setChildren(children + 1);
        setTotalChildren((children + 1) * props.priceChildren);
      }
    }

    return (
      <div className="App">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Tipo de entrada</Table.HeaderCell>
              <Table.HeaderCell>Cantidad</Table.HeaderCell>
              <Table.HeaderCell>Precio</Table.HeaderCell>
              <Table.HeaderCell>TOTAL</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>NINOS (menor de 12)</Table.Cell>
              <Table.Cell>
                <Button size="mini" icon="minus" onClick={() => handleChildren("m")} />{children}{" "}
                <Button size="mini" icon="plus" onClick={() => handleChildren("p")} />
              </Table.Cell>
              <Table.Cell>{props.priceChildren}</Table.Cell>
              <Table.Cell>${totalChildren}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>ADULTOS</Table.Cell>
              <Table.Cell>
                <Button size="mini" icon="minus" onClick={() => handleAdult("m")} />{adult}{" "}
                <Button size="mini" icon="plus" onClick={() => handleAdult("p")} />
              </Table.Cell>
              <Table.Cell>{props.priceAdult}</Table.Cell>
              <Table.Cell>${totalAdult}</Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table>

        <Header as="h1" id="extrainfo">Precio total de entradas: ${totalAdult + totalChildren} </Header>
      </div>
    );
}

export default TableBuy;