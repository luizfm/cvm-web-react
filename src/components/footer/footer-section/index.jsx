import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import Button from '../../button'

import styles from './styles.module.scss'

const FooterSection = ({ title, list, className }) => {
  return (
    <section className={classnames(styles['section-container'], className)}>
      <h1 className={styles.title}>{title}</h1>

      {list.map(item => (
        item.readOnly ? (
          <p key={item.label} className={classnames(styles['section-item'], styles['read-only'])}>{item.label}</p>
        ) : (
          <Button
            key={item.label}
            to={item.path}
            className={styles['section-item']}
          >
            {item.label}
          </Button>
        )
      ))}
    </section>
  )
}

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    path: PropTypes.string,
    readOnly: PropTypes.bool
  })).isRequired,
  className: PropTypes.string,
}

FooterSection.defaultProps = {
  className: '',
}

export default FooterSection
