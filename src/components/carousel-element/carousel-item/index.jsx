import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Button, { BUTTON_THEMES } from '../../button'
import StyledLottie from '../../styled-lottie'
import Modal from '../../modal'
import useToggle from '../../../hooks/use-toggle'
import { PAG_SEGURO, HELP_METHODS, HELP_METHODS_TEXTS } from '../../../constants/help-page'
import InlineEdit from '../../inline-edit'
import PagSeguroLogo from '../../../assets/logos/pagseguro-logo.png'
import PaypalLogo from '../../../assets/logos/paypal-logo.png'

import styles from './styles.module.scss'

const CarouselItem = ({ title, animation, id }) => {
  const [isModalOpen, onToggleModal] = useToggle()

  const handleModalTitle = HELP_METHODS[id].TITLE

  const renderModalContent = useMemo(() => {
      if (id === HELP_METHODS.PAG_SEGURO.SLUG) {
        return (
          <div className={styles['donation-container']}>
            <p className={styles['donation-description']}>
              {PAG_SEGURO.description}
            </p>
            <div className={styles['donation-payments']}>
              <a href={PAG_SEGURO.links.pagSeguro} target="_blank" rel="noreferrer">
                <img className={styles.image} src={PagSeguroLogo} alt="PagSeguro link" />
              </a>
              <a href={PAG_SEGURO.links.paypal} target="_blank" rel="noreferrer">
                <img className={styles.image} src={PaypalLogo} alt="Paypal link" />
              </a>
            </div>
          </div>
        )
      }

      if (id === HELP_METHODS.BANK_TRANSACTION.SLUG) {
        return (
          <div className={styles['bank-container']}>
            <p>Banco: {HELP_METHODS_TEXTS[id].bank}</p>
            <p>Agência: {HELP_METHODS_TEXTS[id].agency}</p>
            <p>Conta: {HELP_METHODS_TEXTS[id].account}</p>
          </div>
        )
      }

      return (
        <div className={styles['input-wrapper']}>
          <InlineEdit
            className={styles['textarea']}
            label="Informações sobre esse método de doação"
            hiddenLabel
            isMultiline
            value={HELP_METHODS_TEXTS[id]}
          />
        </div>
      )
    }, [id])

  return (
    <div className={styles.container}>
      <article className={styles['carousel-container']}>
        <h1 className={styles['carousel-item-title']}>{title}</h1>

        <StyledLottie animation={animation} />

        <Button
          theme={BUTTON_THEMES.SECONDARY}
          className={styles.button}
          onClick={onToggleModal}
        >
          Clique aqui para ajudar desta forma
        </Button>
      </article>
      {isModalOpen && (
        <Modal title={handleModalTitle} onClose={onToggleModal} id="Hello-world">
          {renderModalContent}
        </Modal>
      )}
    </div>
  )
}

CarouselItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  animation: PropTypes.shape(),
}

CarouselItem.defaultProps = {
  title: '',
  animation: {},
}

export default CarouselItem
