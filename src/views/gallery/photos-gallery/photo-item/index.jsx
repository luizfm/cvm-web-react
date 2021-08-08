import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import Button from '../../../../components/button'

import styles from './styles.module.scss'

const PhotoItem = ({ label, image, imageDescription, className}) => {
  return (
    <section className={classnames(styles['elements-container'], className)}>
      <h1>{label}</h1>
      <img src={image} alt={imageDescription} />
      <Button className={styles['delete-button']}>Remover</Button>
    </section>
  )
}

PhotoItem.propTypes = {
  label: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  imageDescription: PropTypes.string.isRequired,
  className: PropTypes.string,
}

PhotoItem.defaultProps = {
  className: '',
  label: '',
}

export default PhotoItem
