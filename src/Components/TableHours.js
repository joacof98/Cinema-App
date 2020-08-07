import React from "react";
import { Table } from "semantic-ui-react";

function TableHours() {
  return (
    <div className="App">
      <Table id='tableHours'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Lunes</Table.HeaderCell>
            <Table.HeaderCell>Martes</Table.HeaderCell>
            <Table.HeaderCell>Miercoles</Table.HeaderCell>
            <Table.HeaderCell>Jueves</Table.HeaderCell>
            <Table.HeaderCell>Viernes</Table.HeaderCell>
            <Table.HeaderCell>Sabado</Table.HeaderCell>
            <Table.HeaderCell>Domingo</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>10:30 AM</Table.Cell>
            <Table.Cell>12:00 AM</Table.Cell>
            <Table.Cell>10:30 AM</Table.Cell>
            <Table.Cell>10:00 AM</Table.Cell>
            <Table.Cell>16:00 PM</Table.Cell>
            <Table.Cell>16:00 PM</Table.Cell>
            <Table.Cell>18:00 PM</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>18:00 PM</Table.Cell>
            <Table.Cell>18:00 PM</Table.Cell>
            <Table.Cell>17:00 PM</Table.Cell>
            <Table.Cell>16:45 PM</Table.Cell>
            <Table.Cell>19:00 PM</Table.Cell>
            <Table.Cell>19:45 PM</Table.Cell>
            <Table.Cell>20:00 PM</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>21:45 PM</Table.Cell>
            <Table.Cell>21:00 PM</Table.Cell>
            <Table.Cell>21:30 PM</Table.Cell>
            <Table.Cell>22:00 PM</Table.Cell>
            <Table.Cell>22:00 PM</Table.Cell>
            <Table.Cell>23:30 PM</Table.Cell>
            <Table.Cell>23:30 PM</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default TableHours;