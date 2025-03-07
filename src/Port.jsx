import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'

const Port = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
      </main>
    </div>
  )
}

export default Port
