import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';


export const BotonReiniciar = () => {
  
    const navigate = useNavigate();

    const volverAEmpezar = () => {
        navigate('../start')
        }

    return (
        <Button className="boton" variant="outline-danger" onClick={volverAEmpezar}>
            Volver a empezar
        </Button>
    )
}