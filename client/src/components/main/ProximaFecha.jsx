import React, { useContext, useEffect, useState } from 'react'
import { JSFutbolContext } from '../../context/JSFutbolContext';
import Table from 'react-bootstrap/esm/Table';
import axios from 'axios';

export const ProximaFecha = () => {
  
  const {user, setUser, actionReload, setActionReload, week} = useContext(JSFutbolContext);
  const [nextRound, setNextRound] = useState()

  useEffect(() => {
    axios
    .get(`http://localhost:4000/round/${week}`)
    .then((res)=>{
      setNextRound(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  
  }, [week])

  return (
    <div className='tablaPosiciones'>
      <h2 className="mt-4">Próxima fecha</h2>
        <Table variant="secondary" size="sm">
            <thead>
            <tr>
                <th>Equipo Local</th>
                <th></th>
                <th>Equipo Visitante</th>
            </tr>
            </thead>
            <tbody>
                {nextRound?.map((match ,index)=>{

                let myTeamHome = "";
                let myTeamAway = "";

                user.selectedTeam == match.home_team_id ? myTeamHome = "table-info" : null;
                
                user.selectedTeam == match.away_team_id ? myTeamAway = "table-info" : null;


                return (
                    <tr key={index}>
                        <td className={`center ${myTeamHome}`}>{match.home_team_name}</td>
                        <td className='center'>vs</td>
                        <td className={`center ${myTeamAway}`}>{match.away_team_name}</td>
                    </tr>
                    )
                })
                }
            </tbody>
        </Table>
    </div>
  )
}
