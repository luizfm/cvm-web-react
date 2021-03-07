import React from 'react';
import { Link } from 'react-router-dom';

import volunteerImageCall from '../../assets/volunteercall.svg';

import { 
    HomeContainer, 
    HeroSection, 
    NoticeSection, 
    SocialMediaSection, 
    LawInformationSection, 
    ImageContainer,
    NoticeContainer
} from './style';

const Home = () => {
    return (
        <HomeContainer>
            <HeroSection>
                <Link to="/">
                    <ImageContainer src={volunteerImageCall} />
                </Link>
            </HeroSection>

            <NoticeSection>
                <h2>
                    Resumo de Notícias
                </h2>

                <NoticeContainer>
                    <p>aoisehasoiehasiehaaos</p>
                </NoticeContainer>
            </NoticeSection>

            <SocialMediaSection>

            </SocialMediaSection>

            <LawInformationSection>

            </LawInformationSection>
        </HomeContainer>
    )
}

export default Home;