import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const SelectTeamDetails = ({selectedTeam, actionReload}) => {

    const [teamDetails, setTeamDetails] = useState([])


    useEffect(() => {
        axios
        .get(`http://localhost:4000/teams/getTeamBasicInfo/${selectedTeam}`)
        .then((res)=>{
            setTeamDetails(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
    
      }, [actionReload])
    
  return (
    <div>
        <h3>{teamDetails[0]?.team_name}</h3>
        <ul>
        {
          teamDetails?.map((attribute, index)=> {

            return(
            <li key={index}>{attribute.attribute_name}: {attribute.attribute_value}</li>
            )

          })
        }
        </ul>
    </div>
  )
}
