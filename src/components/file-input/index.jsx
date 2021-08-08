import React, { useCallback, useRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Button from '../button'

import styles from './styles.module.scss'

const FileInput = ({ children, className, onChange }) => {
  const inputRef = useRef(null)

  const handleFileInput = useCallback(event => {
    onChange(event.target.files[0])
  }, [onChange])

  const handleButtonClick = useCallback(() => {
    return inputRef.current && inputRef.current.click()
  }, [])

  return (
    <div className={classnames(styles['file-input-container'], className)}>
      <input type="file" ref={inputRef} onChange={handleFileInput} className={styles['file-input']}/>
      <Button onClick={handleButtonClick}>
        {children}
      </Button>
    </div>
  )
}

FileInput.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

FileInput.defaultProps = {
  className: '',
}

export default FileInput
