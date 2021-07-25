import React, { useMemo } from 'react'

import InlineEdit from '../../components/inline-edit'
import ParentsAnimation from '../../utils/animation/parents.json'
import StyledLottie from '../../components/styled-lottie'
import { CHILD_TEXT, OUR_SPACE_TEXT } from '../../constants/cvm-helper'

import styles from './styles.module.scss'
import Button from '../../components/button'

const ChildEducation = () => {
  const ourSpaceSectionItems = useMemo(() =>
    OUR_SPACE_TEXT.map((text, index) => (
      <InlineEdit
          key={index}
          label={`Nosso espaço ${index}`}
          hiddenLabel
          value={text}
          isMultiline
          className={styles[`text-container-${index}`]}
        />
    )), [])

  return (
    <div className={styles.container}>
      <section className={styles['child-education-section']}>
        <h1 className={styles['child-education-section-title']}>Educaçao infantil</h1>

        <InlineEdit
          label="Educaçao infantil"
          hiddenLabel
          value={CHILD_TEXT}
          isMultiline
        />

        <StyledLottie
          className={styles['child-education-section-lottie']}
          animation={ParentsAnimation}
        />
      </section>

      <section className={styles['our-space-and-info-section']}>
        <h1 className={styles['our-space-and-info-section-title']}>Nossa espaço e informações</h1>

        {ourSpaceSectionItems}
      </section>

      <section className={styles['downloads-section']}>
        <h1>Downloads</h1>
        <div className={styles['buttons-container']}>
          <Button className={styles.button}>Acesse o Regime Interno do CEI da Creche CVM (Faça o Download)</Button>
          <Button className={styles.button}>Acesse o PPP 2014- Projeto Político Pedagógico do CEI (Faça o Download)</Button>
        </div>
      </section>
    </div>
  )
}

export default ChildEducation;
