import React, { useCallback } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import Button from '../../../../components/button'

import styles from './styles.module.scss'

const PhotoItem = ({ label, image, imageDescription, id, onRemove, className }) => {
  const handleOnRemove = useCallback(() => {
    onRemove(id)
  }, [id, onRemove])

  return (
    <section className={classnames(styles['elements-container'], className)}>
      <h1>{label}</h1>
      <img src={image} alt={imageDescription} />
      <Button className={styles['delete-button']} onClick={handleOnRemove}>Remover</Button>
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
}

PhotoItem.defaultProps = {
  onRemove: () => {},
  className: '',
  label: '',
}

export default PhotoItem
