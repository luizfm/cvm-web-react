import React, { useMemo } from 'react'
import classnames from 'classnames'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

export const BUTTON_THEMES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
}

export const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}


const Button = ({ to, children, onClick, type, disabled, size, theme, className, ...restOfProps }) => {

  const buttonStyles = useMemo(
    () =>
      classnames(styles.button, styles[size], styles[theme], className), [className, size, theme]
  )

  const buttonContent = useMemo(() => (
    <>
      {children}
    </>
  ), [children])

  if(to) {
    return (
      <Link to={to} className={buttonStyles} {...restOfProps}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={buttonStyles}
      {...restOfProps}
    >
      {buttonContent}
    </button>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  theme: PropTypes.oneOf(Object.values(BUTTON_THEMES)),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
}

Button.defaultProps = {
  to: '',
  disabled: false,
  size: BUTTON_SIZES.MEDIUM,
  theme: BUTTON_THEMES.PRIMARY,
  type: 'button',
  className: '',
}

export default Button
