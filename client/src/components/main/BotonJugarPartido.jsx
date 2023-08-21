import React, { useContext } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { JSFutbolContext } from '../../context/JSFutbolContext';

export const BotonJugarPartido = () => {

  const {week, setWeek} = useContext(JSFutbolContext);
  
    const jugarPartido = () => {
        //lógica partido
        //abrir modal

        localStorage.setItem("week", week + 1);
        setWeek(parseInt(localStorage.getItem("week")));
      }

    return (
      <Button onClick={jugarPartido}>Jugar partido</Button>
    )
}
