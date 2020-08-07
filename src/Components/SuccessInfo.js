import React from 'react';
import { Message } from "semantic-ui-react";

function SuccessInfo(props) {

  var weekday = new Array(7);
  weekday[0] = "Domingo";
  weekday[1] = "Lunes";
  weekday[2] = "Martes";
  weekday[3] = "Miercoles";
  weekday[4] = "Jueves ";
  weekday[5] = "Sabado";
  weekday[6] = "Domingo";

  const day = weekday[new Date().getDay()];

  const success = props.msj ? (
    <Message color="green" header={`Entradas compradas con exito. (válidas para hoy ${day})`} />
  ) : null;

  return success;
}

export default SuccessInfo;