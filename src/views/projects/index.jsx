import React, { useMemo } from 'react'

import AccordionElement from '../../components/accordion-element'
import { PROJECTS } from '../../constants/cvm-helper'

import styles from './styles.module.scss'

const Projects = () => {
  const accordionContent = useMemo(() => PROJECTS.map((item => (
    <AccordionElement
      key={item.title}
      label={item.title}
      elementContent={item.description}
    />
  ))), [])

  return (
    <div className={styles.container}>
      <div className={styles['accordion-box']}>
        {accordionContent}
      </div>
    </div>
  )
}

export default Projects
