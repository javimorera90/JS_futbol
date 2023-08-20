import React, { useContext, useEffect } from 'react'
import './scss/main.scss'
import { JSFutbolContext } from '../context/JSFutbolContext';
import { ProximaFecha } from '../components/main/ProximaFecha';
import { TablaDePosiciones } from '../components/main/TablaDePosiciones';
import { ProximosPartidos } from '../components/main/ProximosPartidos';
import { UltimosPartidos } from '../components/main/UltimosPartidos';
import { ProximoPartido } from '../components/main/ProximoPartido';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
    
  const {user, setUser, actionReload, setActionReload, week, setWeek} = useContext(JSFutbolContext); 
  const navigate = useNavigate();
  
  console.log(user)
  console.log(week);
  
  const jugarPartido = () => {
    localStorage.setItem("week", week + 1);
    setWeek(parseInt(localStorage.getItem("week")));
  }

  const volverAEmpezar = () => {
    navigate('../start')
  }

  return (
    <>
        <Row>
          <Col>
            <TablaDePosiciones/>
          </Col>
          <Col>
            <ProximaFecha/>
          </Col>
          <Col>
            <ProximosPartidos/>
            <UltimosPartidos/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProximoPartido/>
          </Col>
          <Col className='cont-botones col-4'>
            <Button onClick={jugarPartido}>Jugar partido</Button>
            <Button className="boton" variant="outline-danger" onClick={volverAEmpezar}>Volver a empezar</Button>
          </Col>
        </Row>
    </>
  )
}
