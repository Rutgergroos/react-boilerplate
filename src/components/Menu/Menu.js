import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Menu.scss'

const Menu = ({ isOpen }) => (
  <div
    className={cx('menu', {
      'menu--is-open': isOpen
    })} />
)

Menu.propTypes = {
  isOpen: PropTypes.bool
}

export default Menu
