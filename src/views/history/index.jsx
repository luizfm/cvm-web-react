import React, { useCallback, useMemo, useState } from 'react';
import classnames from 'classnames'
import Lottie from 'react-lottie';

import CvmBuildingImage from '../../assets/images/cvm-building.jpg'
import { CVM_IDENTITY, CVM_OBJECTIVES, MOCK_HISTORY } from '../../constants/cvm-helper'
import dinosaurData from '../../utils/animation/dinosaurData.json';
import heroData from '../../utils/animation/hero.json';
import KidsImage from '../../assets/images/fantasy-kids.jpg';
import StudentsImage from '../../assets/images/students.png';
import { useMediaQuery } from '../../hooks/mediaQuery';

import styles from './styles.module.scss'

import ImageAndTextCard from './image-and-text-card';


const History = () => {
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

    const handleFontSize = hasMediaMatch ? "16px" : "12px";

    const pageHistoryItems = useMemo(() => [
        {
            name: "beginHistory",
            id: "begin-history-textarea",
            label: 'Inicio da história',
            image: CvmBuildingImage,
            imageLabel: 'CVM building',
            value: MOCK_HISTORY.BEGIN.text
        },
        {
            name: "mediumHistory",
            id: "medium-history-textarea",
            label: 'Meio da história',
            image: KidsImage,
            imageLabel: 'CVM kids',
            value: MOCK_HISTORY.MEDIUM.text,
            reverse: true,
        },
        {
            name: "endHistory",
            id: "end-history-textarea",
            label: 'Final da história',
            image: StudentsImage,
            imageLabel: 'CVM students',
            value: MOCK_HISTORY.END.text
        },
    ], [])

    const identityItems = useMemo(() => [
        {
            title: "Visão",
            text: CVM_IDENTITY.VISION.TEXT,
            className: styles.vision
        },
        {
            title: 'MISSÃO',
            text: CVM_IDENTITY.MISSION.TEXT,
            className: styles.mission
        },
        {
            title: 'Valores',
            text: CVM_IDENTITY.VALUES.TEXT,
            className: styles.values
        }
    ], [])

    const goalsItems = useMemo(() => [
        {
            title: "Geral",
            text: CVM_OBJECTIVES.GENERAL.TEXT,
            className: styles['general-goals']
        },
        {
            title: "Específicos",
            text: CVM_OBJECTIVES.SPECIFIC.TEXT,
            className: styles['specific-goals']
        }
    ])

    return (
        <div className={styles.container}>
            <section className={styles['about-us-section']}>
                <h1>Entenda nossa história</h1>

                {pageHistoryItems.map(item => (
                    <ImageAndTextCard
                        key={item.name}
                        name={item.name}
                        id={item.id}
                        label={item.label}
                        image={item.image}
                        imageLabel={item.imageLabel}
                        inputValue={item.value}
                        {...item}
                    />
                ))}
            </section>

            <section className={styles['our-mission-section']}>
                <h1 className={styles['our-mission-section-title']}>Da nossa identidade</h1>

                {identityItems.map(item => (
                    <div key={item.title} className={classnames(styles['identity-wrapper'], item.className)}>
                        <strong className={styles.title}>{item.title}</strong>
                        <p className={styles.text}>{item.text}</p>
                    </div>
                ))}

                <div className={styles['our-mission-section-lottie']}>
                    <Lottie
                        style={hasMediaMatch ? lottieStyles.container : lottieStyles.containerMobile}
                        options={defaultOptions(heroData)}
                        isPaused={animationState.isPaused}
                        isStopped={animationState.isStopped}
                    />
                </div>
            </section>

            <section className={styles['our-goals-section']}>
                <h1 className={styles['our-goals-section-title']}>Dos nossos objetivos</h1>

                {goalsItems.map(item => (
                    <div key={item.title} className={item.className}>
                        <strong className={styles.title}>{item.title}</strong>
                        <p className={styles.text}>{item.text}</p>
                    </div>
                ))}

                <div className={styles['our-goals-section-lottie']}>
                    <Lottie
                        style={hasMediaMatch ? lottieStyles.container : lottieStyles.containerMobile}
                        options={defaultOptions(dinosaurData)}
                        isPaused={animationState.isPaused}
                        isStopped={animationState.isStopped}
                    />
                </div>
            </section>
        </div>
    )
}

const lottieStyles = {
    containerMobile: {
        width: 270,
        height: 270,
    },
    container: {
        width: 330,
        height: 330
    }
};

export default History;
