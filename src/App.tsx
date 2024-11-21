import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from './component/Home'
import './App.css'

const App: React.FC=()=> {
 

  return (
    <Routes>
        <Route path='/' element={ <Home/>}/>
    </Routes>
  )
}

export default App
