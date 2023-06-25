import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App(){
  return (
    <nav>
      <img src={reactLogo} className='nav--icon'/>
      <h3 className='nav--logo_text'>CodeCraft</h3>
      <ul>
        <li>About</li>
        <li>Members</li>
        <li>Footer</li>
      </ul>
    </nav>
    )
}

export default App
