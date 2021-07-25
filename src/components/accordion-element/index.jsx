import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import useToggle from '../../hooks/use-toggle'
import Button, { BUTTON_THEMES } from '../../components/button'
import { ReactComponent as DownArrowIcon } from '../../assets/icons/down-arrow-icon.svg';

import styles from './styles.module.scss'

const AccordionElement = ({ elementContent, label }) => {
  const [isAccordionOpen, onToggleAccordion] = useToggle()

  return (
    <div className={classnames(styles['accordion-container'], { [styles.open]: isAccordionOpen})}>
      <div className={styles['accordion-wrapper']}>
        <div className={styles['accordion-header']}>
          {label}
          <Button className={styles['expand-button']} theme={BUTTON_THEMES.SECONDARY} onClick={onToggleAccordion}>
            <DownArrowIcon className={classnames(styles.icon, { [styles['flipped-icon']]: isAccordionOpen })}/>
          </Button>
        </div>
      </div>
      {isAccordionOpen && (
        <div className={styles.content}>
          {elementContent}
        </div>
      )}
    </div>
  )
}

AccordionElement.propTypes = {
  elementContent: PropTypes.node,
  label: PropTypes.string.isRequired,
}

AccordionElement.defaultProps = {
  elementContent: <></>
}

export default AccordionElement
