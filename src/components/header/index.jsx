import React from 'react'

import Button, { BUTTON_THEMES } from '../button'
import Input from '../input'
import LogoImg from '../../assets/logo.svg';
import { ReactComponent as LoginIcon } from '../../assets/icons/login-icon.svg';

import styles from './styles.module.scss'

const navItems = [
  {
    label: 'A Cvm',
    path: '/home'
  },
  {
    label: 'Educação Infatil',
    path: '/educacao-infantil'
  },
  {
    label: 'Acolhimento institucional',
    path: '/acolhimento-institucional'
  },
  {
    label: 'Projetos',
    path: '/projetos'
  },
  {
    label: 'Ajude',
    path: '/ajude'
  }
]

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={LogoImg} alt="CVM Logo" />

      <nav className={styles['nav-container']}>
        {navItems.map(item => (
          <Button to={item.path} key={item.label} className={styles.link}>{item.label}</Button>
        ))}
      </nav>

      <div className={styles['login-container']}>
        <Input
          label="Email"
          hiddenLabel
          id="email-input"
          placeholder="Informe seu email"
        />
        <Input
          label="Password"
          hiddenLabel
          id="password-input"
          type="password"
          placeholder="Informe sua senha"
        >
        </Input>
        <Button className={styles.button} theme={BUTTON_THEMES.SECONDARY}>
          <LoginIcon className={styles['login-icon']}/>
        </Button>
      </div>
    </header>
  )
}

export default Header
