import React, { useContext, useEffect, useState } from 'react'
import { JSFutbolContext } from '../../context/JSFutbolContext';
import './scss/ultimosPartidos.scss';
import Table from 'react-bootstrap/esm/Table';
import axios from 'axios';

export const UltimosPartidos = () => {
  
  const {user, week} = useContext(JSFutbolContext);
  const [next5Games, setNext5Games] = useState()

  useEffect(() => {
    axios
    .get(`http://localhost:4000/fixture/lastMatches/${week}/${user.selectedTeam}`)
    .then((res)=>{
      setNext5Games(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  
  }, [week])

  return (
    <div className='tablaPosiciones'>
      <h2 className="mt-4">Últimos partidos</h2>
        <Table variant="light" size="sm">
            <thead>
            <tr>
              <th>Jornada</th>
              <th>Rival</th>
              <th></th>
              <th>Resultado</th>
            </tr>
            </thead>
            <tbody>
                {next5Games?.map((match ,index)=>{
                  
                let rival = "";
                let localia = "";
                let resultColor = "";

                if(match.home_team_id == user.selectedTeam){
                  localia = "L";
                  rival = match.away_team_name;
                } else
                  if(match.away_team_id == user.selectedTeam){
                    localia = "V";
                    rival = match.home_team_name;
                  } else throw new Error("Ninguno es tu equipo");


                if(match.winner == user.selectedTeam){resultColor = "table-success"} else
                if(match.winner == 0){resultColor = "table-info"} else {resultColor = "table-danger"}

                return (
                    <tr key={index}>
                        <td>{match.round}</td>
                        <td className={`center`}>{rival}</td>
                        <td className={`center`}>{localia}</td>
                        <td className={`left ${resultColor}`}>{match.result}</td>
                    </tr>
                    )
                })
                }
            </tbody>
        </Table>
    </div>
  )
}

