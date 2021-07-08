import React from 'react';

import logoImg from '../../assets/logo.svg';
import kids from '../../assets/kids.svg';
import Button, { BUTTON_SIZES, BUTTON_THEMES } from '../../components/button'

import styles from './styles.module.scss'
import classNames from 'classnames';

const Presentation = () => {
    return (
        <div className={styles.container}>
            <section className={styles.content}>
                <img className={styles.logo} src={logoImg} alt="CVM Logo"/>

                <h1 className={styles.introduction}>A CVM ajuda a comunidade com seus serviços de creche e orfanato</h1>

                <Button
                    className={styles['nav-button']}
                    id="navigate-home-button"
                    to="/home"
                    size={BUTTON_SIZES.LARGE}
                    theme={BUTTON_THEMES.SECONDARY}
                >
                    Ir para o site
                </Button>
            </section>
            <div className={styles.aside}>
                <img className={styles.kids} src={kids} alt="Kids" />

                <Button
                    className={styles['mobile-button']}
                    id="navigate-home-button"
                    to="/home"
                    size={BUTTON_SIZES.LARGE}
                    theme={BUTTON_THEMES.PRIMARY}
                >
                    Acessar o site
                </Button>
            </div>

            <div className={classNames(styles.top, styles.rotated)} />
            <div className={classNames(styles.bottom, styles.rotated)} />
        </div>
    )
}

export default Presentation;
