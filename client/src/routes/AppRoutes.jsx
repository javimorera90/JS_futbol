import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Start } from '../pages/Start'
import { Error } from '../pages/error'
import { Main } from '../pages/main'
import Container from 'react-bootstrap/Container';


export const AppRoutes = () => {
  
  return (
    <Container fluid>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/start' element={<Start/>}/>
            <Route path='/main' element={<Main/>}/>
            <Route path='/*' element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </Container>
  )
}
