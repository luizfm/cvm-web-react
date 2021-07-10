import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button, { BUTTON_THEMES } from '../../../components/button'
import styles from './styles.module.scss'

const NewsCard = ({ date, notice, id, className }) => {
  return (
    <article className={classnames(styles['notice-container'], className)}>
      <span className={styles['notice-date']}>{date}</span>
      <Button to={`/site/detalhes-noticia/${id}`} className={styles['notice-button']} theme={BUTTON_THEMES.GREEN}>
          <h1>{notice}</h1>
      </Button>
    </article>
  )
}

NewsCard.propTypes = {
  date: PropTypes.string.isRequired,
  notice: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  className: PropTypes.string
}

NewsCard.defaultProps = {
  className: '',
}

export default NewsCard
