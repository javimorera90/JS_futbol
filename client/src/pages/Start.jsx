import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './scss/start.scss'
import { SelectTeamDetails } from '../components/SelectTeamDetails';
import { JSFutbolContext } from '../context/JSFutbolContext';
import { useNavigate } from 'react-router-dom';

export const Start = () => {

  const [selectedTeam, setSelectedTeam] = useState()
  const [teamList, setTeamList] = useState([])
  const {user, setUser, actionReload, setActionReload, week, setWeek} = useContext(JSFutbolContext);
  const navigate = useNavigate();

  useEffect(() => {

    axios
    .get('http://localhost:4000/teams/getTeamsList')
    .then((res)=>{setTeamList(res.data)})
    .catch((err)=>{console.log(err)});

  }, [])

  const handleChange = (e) => {
    setSelectedTeam(e.target.value);
    setActionReload(!actionReload);
    console.log(e.target.value);
  }

  const aceptar = () =>{
    if(selectedTeam){
      setUser({...user, selectedTeam: selectedTeam})
      setWeek(1)
      navigate('../main')
    } 
  }
  
  return (
    <main>
      <h1>ELEGIR EQUIPO</h1>
      <select
        name="team_name"
        value={selectedTeam}
        onChange={handleChange}
      >
        
        <option value=""></option>
        {
          teamList?.map((team, index)=> {

            return(
            <option key={index} value={team.team_id}>
              {team.team_name}
            </option>
            )

          })
        }

      </select>
      <button onClick={aceptar}>ACEPTAR</button>
      {selectedTeam &&
        <SelectTeamDetails 
          selectedTeam = {selectedTeam}
          actionReload = {actionReload}
        />}
      
    </main>
  )
}
