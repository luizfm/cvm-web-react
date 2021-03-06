import React, { useCallback } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { ReactComponent as CloseIcon } from '../../../../assets/icons/close-black-icon.svg'

import Button, { BUTTON_THEMES } from '../../../../components/button'

import styles from './styles.module.scss'

const PhotoItem = ({ label, image, imageDescription, id, onRemove, className, allowDelete }) => {
  const handleOnRemove = useCallback(() => {
    onRemove(id)
  }, [id, onRemove])

  return (
    <section className={classnames(styles['elements-container'], className)}>
      <h1>{label}</h1>
      <img className={styles.image} src={image} alt={imageDescription} />
      {allowDelete && (
        <Button theme={BUTTON_THEMES.SECONDARY} className={styles['delete-button']} onClick={handleOnRemove} aria-label="Deletar foto">
          <CloseIcon />
        </Button>
      )}
    </section>
  )
}

PhotoItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  imageDescription: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
  className: PropTypes.string,
  allowDelete: PropTypes.bool,
}

PhotoItem.defaultProps = {
  onRemove: () => {},
  className: '',
  label: '',
  allowDelete: false,
}

export default PhotoItem
