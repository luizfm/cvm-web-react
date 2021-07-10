import React, { useCallback, useMemo, useState } from 'react';
import Lottie from 'react-lottie';
import { Link } from '@reach/router';

import messageData from '../../utils/animation/message.json';
import socialMediaData from '../../utils/animation/socialMedia.json';
import financialData from '../../utils/animation/financial.json';
import VolunteerImageCall from '../../assets/volunteercall.svg';
import Button from '../../components/button'
import SocialMediaCard from './social-media-card'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook-icon.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram-icon.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter-icon.svg';
import { ReactComponent as File } from '../../assets/icons/file-icon.svg';
import { useMediaQuery } from '../../hooks/mediaQuery';
import NewsCard from './news-card';

import styles from './styles.module.scss'

// MOCK NEWS
const newsItems = [
    {
        id: 1,
        date: "05/10",
        notice: 'Matrículas 2021'
    },
    {
        id: 2,
        date: "05/10",
        notice: 'Imaginarium, empresa que pode ser considerada soci...'
    },
    {
        id: 3,
        date: "03/10",
        notice: 'Amor e carinho aos 98 anos com muito amor e carinho o Senhor...'
    },
    {
        id: 4,
        date: "01/10",
        notice: 'MEGA BAZAR CVM - 10,11 e 12 de maio você não pode perder....'
    },
]

//MOCK FINANCIAL REPORTS
const yearsReports = [
    {
        year: 2019,
        path: '/site/financas/2019'
    },
    {
        year: 2018,
        path: '/site/financas/2018'
    },
    {
        year: 2017,
        path: '/site/financas/2017'
    },
    {
        year: 2016,
        path: '/site/financas/2016'
    },
    {
        year: 2015,
        path: '/site/financas/2015'
    }
]

const Home = () => {
    const hasMediaMatch = useMediaQuery('(min-width: 500px)');

    const [animationState] = useState({
        isStopped: false, isPaused: false
    });

    const defaultOptions = useCallback((data) => {
        return {
            loop: true,
            autoplay: true,
            animationData: data,
            renderSettings: {
                preserveAspectRadio: 'xMidYMid slice'
            }
        }
    }, []);

    const socialMediaItems = useMemo(() => [
        {
            link: 'https://www.facebook.com/ongcvm/',
            lastNews: 'Últimas notícias do Facebook',
            children: (
                <FacebookIcon className={styles['facebook-icon']} />
            )
        },
        {
            link: 'https://www.instagram.com/',
            lastNews: 'Últimas notícias do Instagram',
            children: (
                <Instagram className={styles['instagram-icon']} />
            )
        },
        {
            link: 'https://twitter.com/',
            lastNews: 'Últimas notícias do Twitter',
            children: (
                <Twitter className={styles['twitter-icon']} />
            )
        },
    ], [])

    return (
        <div className={styles.container}>
            <Link to="/site/ajude" className={styles['hero-image']}>
                <img className={styles.image} src={VolunteerImageCall} alt="Ajude voluntariando-se"/>
            </Link>

            <section className={styles['news-section']}>
                <h1 className={styles.title}>Resumo de Notícias</h1>

                <div className={styles.frame}>
                    <Lottie
                        className={styles['news-lottie']}
                        options={defaultOptions(messageData)}
                        height={100}
                        width={100}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}
                    />

                    <div className={styles['news-container']}>
                        {newsItems.map(item => (
                            <NewsCard className={styles['notice-item']}id={item.id} date={item.date} notice={item.notice} />
                        ))}
                    </div>
                </div>
            </section>
            <section className={styles['social-media-section']}>
                <h1 className={styles['social-media-section-title']}>Redes Sociais</h1>

                <div className={styles['social-media-section-lottie']}>
                    <Lottie
                        style={hasMediaMatch ? mediaQueriesStyles.container : mediaQueriesStyles.containerMobile}
                        options={defaultOptions(socialMediaData)}
                        isPaused={animationState.isPaused}
                        isStopped={animationState.isStopped}
                    />
                </div>

                <div className={styles['social-media-section-links']}>
                    {socialMediaItems.map(item => (
                        <SocialMediaCard key={item.link} socialMediaLink={item.link} news={item.lastNews} className={styles['link-item']}>
                            {item.children}
                        </SocialMediaCard>
                    ))}
                </div>

                <div className={styles['mobile-media-buttons']}>
                    {socialMediaItems.map(item => (
                        <Button key={item.link} to={item.link} className={styles['link-item']}>
                            {item.children}
                        </Button>
                    ))}
                </div>
            </section>
            <section className={styles['financial-section']}>
                <h1 className={styles['financial-section-title']}>Informações de transparência</h1>

                <div className={styles['reports-box']}>
                    <h2>Prestação de contas</h2>

                    <p className={styles.description}>Relatório anual e balanço patrimonial</p>

                    {yearsReports.map(item => (
                        <Button to={item.path} key={item.year} className={styles['financial-buttons']}>
                            <span>{item.year}</span>
                            <File />
                        </Button>
                    ))}
                </div>

                <div className={styles['financial-section-lottie']}>
                    <Lottie
                        style={hasMediaMatch ? mediaQueriesStyles.container : mediaQueriesStyles.containerMobile}
                        options={defaultOptions(financialData)}
                        isPaused={animationState.isPaused}
                        isStopped={animationState.isStopped}
                    />
                </div>
            </section>
        </div>
    )
}

const mediaQueriesStyles = {
    containerMobile: {
        width: 270,
        height: 270,
    },
    container: {
        width: 430,
        height: 430
    }
  };

export default Home;
