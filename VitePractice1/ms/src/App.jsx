import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListEmployeesComponent from './ListEmployeesComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import AddEmployee from './AddEmployee'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListEmployeesComponent />} />
          <Route path='/employees' element={<ListEmployeesComponent />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/updateEmployee/:id' element={<AddEmployee />} />
          
        </Routes>
        <FooterComponent />
      </BrowserRouter>  
    </>
  )
}

export default App
