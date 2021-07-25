import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Button, { BUTTON_THEMES } from '../../button'
import StyledLottie from '../../styled-lottie'
import Modal from '../../modal'
import useToggle from '../../../hooks/use-toggle'
import { DONATION, HELP_METHODS } from '../../../constants/cvm-helper'
import InlineEdit from '../../inline-edit'
import PagSeguroLogo from '../../../assets/logos/pagseguro-logo.png'
import PaypalLogo from '../../../assets/logos/paypal-logo.png'

import styles from './styles.module.scss'

const CarouselItem = ({ title, animation, id }) => {
  const [isModalOpen, onToggleModal] = useToggle()

  const handleModalTitle = HELP_METHODS[id].TITLE

  const renderModalContent = useMemo(() => {
    switch(id) {
      case HELP_METHODS.ELETRIC_ENERGY.SLUG: {
        return (
          <>
            <InlineEdit isMultiline />
            <InlineEdit isMultiline />
            <InlineEdit isMultiline />
          </>
        )
      }
      case HELP_METHODS.VOLUNTEER.SLUG: {
        return (
          <>
            <InlineEdit isMultiline />
            <InlineEdit isMultiline />
            <InlineEdit isMultiline />
            <InlineEdit isMultiline />
          </>
        )
      }
      case HELP_METHODS.PAG_SEGURO.SLUG: {
        return (
          <div className={styles['donation-container']}>
            <p className={styles['donation-description']}>
              {DONATION.DESCRIPTION}
            </p>
            <div className={styles['donation-payments']}>
              <a href={DONATION.LINKS.PAG_SEGURO} target="_blank" rel="noreferrer">
                <img className={styles.image} src={PagSeguroLogo} alt="PagSeguro link" />
              </a>
              <a href={DONATION.LINKS.PAYPAL} target="_blank" rel="noreferrer">
                <img className={styles.image} src={PaypalLogo} alt="Paypal link" />
              </a>
            </div>
          </div>
        )
      }
      default: {
        return (
          <InlineEdit isMultiline />
        )
      }
    }
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
  animation: PropTypes.node,
}

CarouselItem.defaultProps = {
  title: '',
  animation: <></>
}

export default CarouselItem
