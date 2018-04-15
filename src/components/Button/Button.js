import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Button.scss'

const Button = ({ isPrimary, children }) => {
  return (
    <button
      className={cx('button', {
        'button--primary': isPrimary
      })}>
      {children}
    </button>
  )
}

Button.propTypes = {
  isPrimary: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Button
