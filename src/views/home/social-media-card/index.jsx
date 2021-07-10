import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const SocialMediaCard = ({ socialMediaLink, children, news, className }) => {
  return (
    <div className={classnames(styles['social-media-container'], className)}>
      <a href={socialMediaLink} className={styles['icon-container']}>
        {children}
      </a>

      <div className={styles['news-box']}>
        <p>{news}</p>
      </div>
    </div>
  )
}

SocialMediaCard.propTypes = {
  socialMediaLink: PropTypes.string,
  news: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

SocialMediaCard.defaultProps = {
  className: '',
}

export default SocialMediaCard
