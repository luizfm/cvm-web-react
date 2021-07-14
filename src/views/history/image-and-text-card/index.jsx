import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import InlineEdit from '../../../components/inline-edit'

import styles from './styles.module.scss'

const ImageAndTextCard = ({
  name,
  label,
  id,
  className,
  reverse,
  onSelect,
  image,
  imageLabel,
  inputValue
}) => {
  return (
    <div className={classnames(styles.container, { [styles.reverse]: reverse }, className)}>
      <InlineEdit
          name={name}
          id={id}
          label={label}
          hiddenLabel
          onSelect={onSelect}
          value={inputValue}
          inputClassName={styles['inline-input']}
          isMultiline
      />

      <img className={styles.image} src={image} alt={imageLabel} />
    </div>
  )
}

ImageAndTextCard.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  onSelect: PropTypes.func,
  image: PropTypes.string,
  imageLabel: PropTypes.string,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  reverse: PropTypes.bool,
}

ImageAndTextCard.defaultProps = {
  className: '',
  onSelect: () => {},
  image: '',
  imageLabel: '',
  inputValue: '',
  reverse: false,
}

export default ImageAndTextCard
