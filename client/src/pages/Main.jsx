import React from 'react'
import './scss/main.scss'
import { ProximaFecha } from '../components/main/ProximaFecha';
import { TablaDePosiciones } from '../components/main/TablaDePosiciones';
import { ProximosPartidos } from '../components/main/ProximosPartidos';
import { UltimosPartidos } from '../components/main/UltimosPartidos';
import { ProximoPartido } from '../components/main/ProximoPartido';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BotonJugarPartido } from '../components/main/BotonJugarPartido';
import { BotonReiniciar } from '../components/main/BotonReiniciar';

export const Main = () => {
    
  return (
    <>
        <Row className="main-page">
          <Col className="col-4 d-flex flex-column align-items-center">
            <TablaDePosiciones/>
            <div className='cont-botones d-flex flex-column mt-4'>
              <BotonJugarPartido/>
              <BotonReiniciar/>
            </div>
          </Col>
          <Col className="col-4">
            <ProximaFecha/>
            <ProximoPartido/>
          </Col>
          <Col className="col-4">
            <ProximosPartidos/>
            <UltimosPartidos/>
          </Col>

        </Row>
    </>
  )
}
