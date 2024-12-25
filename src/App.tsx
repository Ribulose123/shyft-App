import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import './App.css'
import Login from './content/Login'
import Registration from './component/Registration'
import Password from './content/Password'

const App: React.FC=()=> {
 

  return (
    <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/login'  element={<Login/>} />
        <Route path='/signin' element={<Registration/>}/>
        <Route path='/password' element ={<Password/>}/>
    </Routes>
  )
}

export default App
