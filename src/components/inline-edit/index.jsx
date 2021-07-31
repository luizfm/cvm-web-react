import React, { useCallback, useMemo, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import TextareaAutosize from 'react-textarea-autosize';

import Button from '../button'

import styles from './styles.module.scss'

const InlineEdit = ({
  label,
  hiddenLabel,
  id,
  value,
  onSave,
  onCancel,
  className,
  inputClassName,
  name,
  isMultiline,
  ...inputProps
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  const onFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const onBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const onSaveClick = useCallback(() => {
    let payload = inputValue

    if(name) {
      payload = {
        [name]: inputValue
      }
    }

    onSave(payload)
    onBlur()
  }, [inputValue, name, onBlur, onSave])

  const onCancelClick = useCallback(() => {
    setInputValue(value)
    onBlur()
    onCancel()
  }, [onBlur, onCancel, value])

  const onChange = useCallback(event => {
    const { value } = event.target

    setInputValue(value)
  }, [])

  const inputProperties = useMemo(() => ({
    value: inputValue,
    onChange,
    onFocus,
    onBlur,
    name,
    className: classnames(styles.input, { [styles.textarea]: isMultiline }, inputClassName)
  }), [inputClassName, inputValue, isMultiline, name, onBlur, onChange, onFocus])

  const inputElement = useMemo(() =>
    isMultiline ? (
      <TextareaAutosize
        {...inputProperties}
        {...inputProps}
        className={classnames(styles.textarea, inputProperties.className)}
      >
        {inputValue}
      </TextareaAutosize>
    ) : (
      <input {...inputProperties} {...inputProps} />
    ), [inputProperties, inputProps, inputValue, isMultiline])

  return (
    <div className={classnames(styles['inline-edit-container'], className)}>
      <div className={styles['input-box']}>
        <label
          className={classnames(styles.label, { [styles['hidden-label']]: hiddenLabel })}
          htmlFor={id}
        >
          {label}
        </label>
        {inputElement}
      </div>
      {isFocused && (
        <div className={styles['buttons-container']}>
          <Button onClick={onCancelClick} className={styles['cancel-button']}>Cancel</Button>
          <Button onClick={onSaveClick} className={styles['save-button']}>Save</Button>
        </div>
      )}
    </div>
  )
}

InlineEdit.propTypes = {
  label: PropTypes.string.isRequired,
  hiddenLabel: PropTypes.bool,
  isMultiline: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  name: PropTypes.string,
}

InlineEdit.defaultProps = {
  hiddenLabel: false,
  isMultiline: false,
  id: null,
  value: null,
  onSave: () => {},
  onCancel: () => {},
  className: '',
  inputClassName: '',
  name: '',

}

export default InlineEdit
