import React from 'react'
import './App.css'
import Terminal from './components/Terminal'

function App() {

  return (
    <>
    <div className='container'>
      <p className='message typed-out'>Welcome to my interactive terminal thememed portfolio.</p>
      <p className='message typed-out'>To learn a bit more about me, see the projects I've worked on, or to connect with me, type  
      <span className='command'> 'help'</span> to see a list of commands.</p>
    </div>
    <Terminal/>
    </>
  )
}

export default App
