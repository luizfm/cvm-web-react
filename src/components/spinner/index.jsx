import React, { useMemo } from 'react'
import classnames  from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

export const SPINNER_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  X_LARGE: 'x-large'
}


const Spinner = ({ size, color }) => {
  const spinnerColor = useMemo(() => ({
    borderLeftColor: color,
  }), [color])

  return (
    <div style={spinnerColor} className={classnames(styles.loader, styles[size])} />
  )
}

Spinner.propTypes = {
  size: PropTypes.oneOf(Object.values(SPINNER_SIZE)),
  color: PropTypes.string.isRequired,
}

Spinner.defaultProps = {
  size: SPINNER_SIZE.MEDIUM,
}

export default Spinner;
