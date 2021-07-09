import React from 'react'

import FooterSection from './footer-section'

import styles from './styles.module.scss'

const GERAL_SECTION = [
  {
    label: 'Galeria de fotos',
    path: '/galeria-de-fotos'
  },
  {
    label: 'Cursos',
    path: '/cursos'
  },
  {
    label: 'Agenda de eventos',
    path: '/agenda-de-eventos'
  },
]

const HELP_SECTION = [
  {
    label: 'Faça uma doação',
    path: '/ajude'
  },
  {
    label: 'Trabalhe Conosco',
    path: '/carreiras'
  },
]


const CONTACT_SECTION = [
  {
    label: 'Rua Otto Júlio Malina - 1306, Ipiranga - São José - SC.',
    readOnly: true,
  },
  {
    label: '(48) 3357-9400',
    readOnly: true,
  },
  {
    label: 'comunicacaosocialcvm@floripa.com.br',
    readOnly: true,
  },
]


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterSection title="Geral" list={GERAL_SECTION} className={styles.general}/>
      <FooterSection title="Ajude" list={HELP_SECTION} className={styles.help}/>
      <FooterSection title="Contato" list={CONTACT_SECTION} className={styles.contact}/>

      <span className={styles.copyright}>
        Copyright © 2021 - CVM - Todos os direitos reservados - Desenvolvido por estudantes da IESGF
      </span>
    </footer>
  )
}

export default Footer
