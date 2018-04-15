import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ isPrimary, children }) => {
  return (
    <button>
      {children}
    </button>
  )
}

Button.propTypes = {
  isPrimary: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Button
