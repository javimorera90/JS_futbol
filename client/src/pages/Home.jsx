import React from 'react'
import './scss/home.scss'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const navigate = useNavigate();

  return (
    <main>
      <button onClick={()=>{navigate('/start')}}>JUGAR</button>
    </main>
  )
}
