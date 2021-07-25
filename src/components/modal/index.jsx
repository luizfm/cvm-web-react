import React from 'react'
import PropTypes from 'prop-types'
import AriaModal from 'react-aria-modal'
import { ReactComponent as CloseIcon } from '../../assets/icons/close-black-icon.svg';

import styles from './styles.module.scss'
import Button, { BUTTON_THEMES } from '../button';

const Modal = ({ id, title, onClose, children }) => {
  return (
    <AriaModal
      initialFocus={`#${id}`}
      onExit={onClose}
      titleText={title}
      focusDialog
      verticallyCenter
    >
      <section id={id} className={styles['modal-container']}>
        <h1 className={styles['modal-title']}>{title}</h1>

        <Button theme={BUTTON_THEMES.SECONDARY} className={styles['close-button']} onClick={onClose}>
          <CloseIcon className={styles['close-icon']} />
        </Button>

        <div className={styles.content}>
          {children}
        </div>
      </section>
    </AriaModal>
  )
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node,
}

Modal.defaultProps = {
  onClose: () => {},
  children: <></>
}

export default Modal
