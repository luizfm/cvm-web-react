import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.scss'

const Input = ({
  label,
  hiddenLabel,
  id,
  value,
  onChange,
  disabled,
  name,
  placeholder,
  type,
  startAdornment,
  endAdornment,
  children,
  className,
  ...props
}) => {
  return (
    <div className={classnames(styles['input-container'], className)}>
      <label htmlFor={id} className={classnames(styles.label, { [styles['hidden-label']]: hiddenLabel})}>
        {label}
      </label>

      <div className={styles['input-box']}>
        {startAdornment && (
          children
        )}
        <input
          className={styles.input}
          id={id}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          {...props}
        />
        {endAdornment && (
          children
        )}
      </div>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  hiddenLabel: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  startAdornment: PropTypes.bool,
  endAdornment: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  hiddenLabel: false,
  name: '',
  disabled: false,
  className: '',
  placeholder: '',
  onChange: () => {},
  value: '',
  startAdornment: false,
  endAdornment: false,
}

export default Input;
