import React from 'react'

import Button, { BUTTON_THEMES } from '../button'
import Input from '../input'
import LogoImg from '../../assets/logo.svg';
import { ReactComponent as LoginIcon } from '../../assets/icons/login-icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu-icon.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg';
import useToggle from '../../hooks/use-toggle'

import styles from './styles.module.scss'

const navItems = [
  {
    label: 'A Cvm',
    path: '/site/cvm'
  },
  {
    label: 'Educação Infatil',
    path: '/site/child-education'
  },
  {
    label: 'Acolhimento institucional',
    path: '/site/acolhimento-institucional'
  },
  {
    label: 'Projetos',
    path: '/site/projects'
  },
  {
    label: 'Ajude',
    path: '/site/ajude'
  }
]

const Header = () => {
  const [isMenuOpen, onToggleMenu] = useToggle()

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={LogoImg} alt="CVM Logo" />

      <nav className={styles['nav-container']}>
        {navItems.map(item => (
          <Button to={item.path} key={item.label} className={styles.link}>{item.label}</Button>
        ))}
      </nav>

      <Button className={styles['menu-button']} onClick={onToggleMenu}>
          <MenuIcon className={styles['menu-icon']}/>
      </Button>

      {isMenuOpen && (
        <div className={styles['mobile-menu']}>
          <Button className={styles['close-button']} onClick={onToggleMenu}>
            <CloseIcon className={styles['close-icon']}/>
          </Button>

          <nav className={styles['nav-mobile-container']}>
            {navItems.map(item => (
              <Button to={item.path} key={item.label} className={styles['mobile-link']}>{item.label}</Button>
            ))}
          </nav>
        </div>
      )}

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
