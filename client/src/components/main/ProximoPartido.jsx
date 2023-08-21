import React, { useContext, useEffect, useState } from 'react'
import { JSFutbolContext } from '../../context/JSFutbolContext';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import './scss/proximoPartido.scss';


export const ProximoPartido = () => {
  
  const {user, setUser, actionReload, setActionReload, week} = useContext(JSFutbolContext);
  const [nextMatch, setNextMatch] = useState()

  useEffect(() => {
    axios
    .get(`http://localhost:4000/fixture/nextMatch/${week}/${user.selectedTeam}`)
    .then((res)=>{
      setNextMatch(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  
  }, [week])

  return (

    <div>
      <h2 className="mt-4 text-center">Próximo partido</h2>
      {nextMatch?.map((nextMatch, index)=>{

        let formatHomeTeam = "";
        let formatAwayTeam = "";

        if(nextMatch.home_team_id == user.selectedTeam){
          formatHomeTeam = "myTeam"
          formatAwayTeam = "rival"
        } else 
        if(nextMatch.away_team_id == user.selectedTeam){
          formatAwayTeam = "myTeam"
          formatHomeTeam = "rival"
        }

        return (
          <div key={index} className="row p-3">
            <div className={`col-6 text-center ${formatHomeTeam}`}>
              <img src={`/img/escudos/${nextMatch.home_team_logo}`} className="team-logo" alt="" />
              <h4>{nextMatch.home_team_name}</h4>
            </div>
            <div className={`col-6 text-center ${formatAwayTeam}`}>
              <img src={`/img/escudos/${nextMatch.away_team_logo}`} className="team-logo" alt="" />
              <h4>{nextMatch.away_team_name}</h4>
            </div>

            <h5 className="text-center mt-3">
              Jornada {nextMatch.round}
            </h5>

          </div>
        )

      })}
        
    </div>
  )
}

