import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
 const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}
export default App;
