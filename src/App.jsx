import React from 'react'
import Header from './components/header/Header'
import "./App.css"
import Home from './components/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Port from './Port'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Port />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
