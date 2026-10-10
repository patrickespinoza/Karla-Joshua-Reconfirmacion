import React from "react";
import ConfirmacionAsistencia from "./componentes-encabezado/confirmacion";
import AvisoReconfirmacion from "./componentes-encabezado/AvisoReconfirmacion";
import Countdown from "./componentes-encabezado/encabeza-cuenta";

export default function Itinerario() {

  return (
    <div>
      <Countdown/>
      
      <AvisoReconfirmacion/>

      <ConfirmacionAsistencia/>
    </div>
  );
}