import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Header from '../Header/Header'
import 'sanitize.css/sanitize.css'
import Menu from '../Menu/Menu'
import './App.scss'
import { connect } from 'react-redux'
import { openMenu } from '../../actions/menu'

const App = ({ openMenu, isMenuOpen }) => {
  return (
    <div>
      <Header
        onMenuIconClick={() => {
          openMenu(!isMenuOpen)
        }} />
      <Menu isOpen={isMenuOpen} />
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
}

App.propTypes = {
  openMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired
}

function mapStateToProps (state) {
  return {
    isMenuOpen: state.menu.isOpen
  }
}

const mapDispatchToProps = {
  openMenu
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
