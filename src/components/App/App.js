import React from 'react'
import Button from '../Button/Button'
import Header from '../Header/Header'
import 'sanitize.css/sanitize.css'
import Menu from '../Menu/Menu'
import './App.scss'

const App = () => (
  <div>
    <Header />
    <Menu isOpen />
    <div className='content'>
      <Button>
        Strooi zout
      </Button>
      <Button isPrimary>
        Maak soep
      </Button>
    </div>
  </div>
)

export default App
