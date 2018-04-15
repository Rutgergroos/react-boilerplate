import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'

const Header = ({ onMenuIconClick }) => (
  <div className='header'>
    <div className='header__content'>
      <div
        onClick={onMenuIconClick}
        className='header__menu-icon'>
        <i className='fas fa-bars' />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  onMenuIconClick: PropTypes.func.isRequired
}

export default Header
