import React, { useContext, useEffect, useState } from 'react'
import './scss/tablaDePosiciones.scss'
import axios from 'axios'
import { JSFutbolContext } from '../../context/JSFutbolContext'
import Table from 'react-bootstrap/Table'

export const TablaDePosiciones = () => {
    const [standings, setStandings] = useState()
    const {user, setUser, actionReload, setActionReload} = useContext(JSFutbolContext);

    useEffect(() => {
      axios
      .get('http://localhost:4000/standings/getStandings')
      .then((res)=>{
        setStandings(res.data);
      })
      .catch((err)=>{
        console.log(err)
      })
    
    }, [])
    
  return (
    <div className='tablaPosiciones'>
        <Table variant="secondary" size="sm">
            <thead>
            <tr>
                <th>Pos</th>
                <th>Equipo</th>
                <th>PJ</th>
                <th>PG</th>
                <th>PE</th>
                <th>PP</th>
                <th>GF</th>
                <th>GC</th>
                <th>DG</th>
                <th>PTS</th>
            </tr>
            </thead>
            <tbody>
                {standings?.map((team,index)=>{
                let qualifies = "";
                let myTeam = "";

                user.selectedTeam == team.team_id ? myTeam = "table-info" : null;
                index < 5 ? qualifies = "table-success" : null;
                index === 5 ? qualifies = "table-warning" : null;

                return (
                    <tr key={index} className={`${qualifies} ${myTeam}`}>
                        <td className='center'>{index+1}</td>
                        <td className='team'>{team.team_name}</td>
                        <td>{team.games_played}</td>
                        <td>{team.games_won}</td>
                        <td>{team.games_tied}</td>
                        <td>{team.games_lost}</td>
                        <td>{team.goals_for}</td>
                        <td>{team.goals_away}</td>
                        <td>{team.goal_difference}</td>
                        <td>{team.points}</td>
                    </tr>
                    )
                })
                }
            </tbody>
        </Table>
    </div>
  )
}
