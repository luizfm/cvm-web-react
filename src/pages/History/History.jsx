import React, { useCallback, useState } from 'react';
import Lottie from 'react-lottie';

import cvmBuildingImage from '../../assets/cvmbuilding.jpg';
import dinosaurData from '../../utils/animation/dinosaurData.json';
import heroData from '../../utils/animation/hero.json';
import kidsImage from '../../assets/fantasykids.jpg';
import studentsImage from '../../assets/students.png';
import CustomText from '../../components/CustomText';
import Flex from '../../components/Flex';
import Separator from '../../components/Separator';
import LabeledText from '../../components/LabeledText';
import TextWithImage from '../../components/TextWithImage';
import { useMediaQuery } from '../../hooks/mediaQuery';

import { 
    HistoryContainer,
    AboutUsContainer, 
    IdentityContainer, 
    LabeledContainer, 
    GoalsContainer,
    GoalsContent,
    Goals,
    GeneralGoals,
    SpecificGoals,
    GeneralGoalTitle,
    GeneralGoalText,
    SpecificGoalTitle,
    SpecificGoalText
} from './style';


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

    return (
        <HistoryContainer>
            <AboutUsContainer>
                <CustomText color="#12AFCB">Entenda nossa História</CustomText>

                <TextWithImage imagePath={cvmBuildingImage} margin="24px" rotateImage="12deg">
                    <Flex marginBottom="24px">
                        <CustomText fontSize={handleFontSize}>
                            Entidade filantrópica assistencial sem fins lucrativos, declarada de utilidade pública 
                            pelo Governo Municipal, Estadual e Federal, esta registrada no Conselho Nacional de 
                            Assistência Social e possui Certificado de Filantropia.
                        </CustomText>
                    </Flex>

                    <CustomText fontSize={handleFontSize}>
                        Fundada em 1º de novembro de 1978 para ajudar crianças, adolescentes e adultos 
                        abandonados e com risco social.
                    </CustomText>
                </TextWithImage>

                <TextWithImage imagePath={kidsImage} margin="48px" direction="row-reverse" rotateImage="-12deg">
                    <CustomText fontSize={handleFontSize}>
                        Importante obra, resultado do trabalho de “Dona Jandira Jovita da Rosa” e de 
                        “Dona Geny Julia Feijó”, evangélicas que em 1978 realizaram a missão de fundar 
                        esta entidade.
                    </CustomText>

                    <Flex marginBottom="24px">
                        <CustomText fontSize={handleFontSize}>
                        O ideal inicial de Dona Jandira e Dona Geny era iniciar o atendimento com 01 
                        (uma) creche para crianças de 0 a 06 anos. Em julho de 1980 Dona Geny 
                        faleceu e em junho de 1985 faleceu também Dona Jandira.
                        </CustomText>
                    </Flex>

                    <CustomText fontSize={handleFontSize}>
                        Em 1986, a instituição fundou o Lar Jandira Jovita da Rosa, para atender crianças 
                        de 0 a 18 anos abandonados e/ou vitimas de maus tratos, em 1996 foi aberta a 
                        Comunidade Terapêutica Dona Geny Julia Feijó, que no início só atendia crianças e 
                        adolescentes, e a partir do ano de 2007 passou a atender adultos.
                    </CustomText>
                </TextWithImage>

                <TextWithImage imagePath={studentsImage} margin="48px" flex>
                    <CustomText fontSize={handleFontSize}>
                        Importante obra, resultado do trabalho de “Dona Jandira Jovita da Rosa” e de 
                        “Dona Geny Julia Feijó”, evangélicas que em 1978 realizaram a missão de fundar 
                        esta entidade.
                    </CustomText>

                    <Flex marginBottom="24px">
                        <CustomText fontSize={handleFontSize}>
                        O ideal inicial de Dona Jandira e Dona Geny era iniciar o atendimento com 01 
                        (uma) creche para crianças de 0 a 06 anos. Em julho de 1980 Dona Geny 
                        faleceu e em junho de 1985 faleceu também Dona Jandira.
                        </CustomText>
                    </Flex>

                    <CustomText fontSize={handleFontSize}>
                        Em 1986, a instituição fundou o Lar Jandira Jovita da Rosa, para atender crianças 
                        de 0 a 18 anos abandonados e/ou vitimas de maus tratos, em 1996 foi aberta a 
                        Comunidade Terapêutica Dona Geny Julia Feijó, que no início só atendia crianças e 
                        adolescentes, e a partir do ano de 2007 passou a atender adultos.
                    </CustomText>
                </TextWithImage>
            </AboutUsContainer>

            <IdentityContainer>
                

                <Flex marginBottom="32px">
                    <CustomText color="#fff">Da nossa identidade</CustomText>
                </Flex>

                <Separator backgroundColor="#fff"/>

                <Flex marginTop="24px">
                    <LabeledContainer>
                        <LabeledText label="Visão">
                            Ser referência na área social, buscando aprimoramento contínuo e inovando pelas ações
                        </LabeledText>

                        <LabeledText label="Missão">
                            Socializar o atendimento de qualidade à população de baixo poder aquisitivo, na 
                            busca de soluções para os problemas das crianças, adolescentes e adultos excluídos, 
                            visando à formação de mulheres e homens críticos e responsáveis, promovendo valores, 
                            rompendo paradigmas e evangelizando-os nos ensinamentos de Jesus.
                        </LabeledText>

                        <LabeledText label="Valores">
                            <CustomText color="#fff" fontSize={handleFontSize}>- Ética;</CustomText>
                            <CustomText color="#fff" fontSize={handleFontSize}>- Transparência;</CustomText> 
                            <CustomText color="#fff" fontSize={handleFontSize}>- Credibilidade; </CustomText>
                            <CustomText color="#fff" fontSize={handleFontSize}>- Competência; </CustomText>
                            <CustomText color="#fff" fontSize={handleFontSize}>- Integridade; </CustomText>
                            <CustomText color="#fff" fontSize={handleFontSize}>- Seriedade; </CustomText>
                            <CustomText color="#fff" fontSize={handleFontSize}>- Respeito às diferenças; </CustomText>
                            <CustomText color="#fff" fontSize={handleFontSize}>- Temor a Deus.</CustomText>
                        </LabeledText>
                    </LabeledContainer>
                </Flex>

                <div>
                    <Lottie 
                        style={hasMediaMatch ? styles.container : styles.containerMobile}
                        options={defaultOptions(heroData)}
                        isPaused={animationState.isPaused}
                        isStopped={animationState.isStopped}
                    />
                </div>
            </IdentityContainer>

            <GoalsContainer>
                

                <Flex marginBottom="32px">
                    <CustomText color="#fff">Dos nossos objetivos</CustomText>
                </Flex>

                <Separator backgroundColor="#fff"/>

                <GoalsContent>
                    <Goals>
                        <GeneralGoals>
                            <GeneralGoalTitle>
                                <CustomText color="#fff">Geral</CustomText>
                            </GeneralGoalTitle>
                            <GeneralGoalText>
                                <CustomText color="#fff" fontSize={handleFontSize}>
                                    Fornecer atendimento assistencial, psicológico e educacional às crianças, 
                                    adolescentes e adultos, bem como aos seus familiares, que resulte para estes uma melhor 
                                    qualidade de vida.
                                </CustomText>
                            </GeneralGoalText>
                        </GeneralGoals>
                        <SpecificGoals>
                            <SpecificGoalTitle>
                                <CustomText color="#fff">Específicos</CustomText>
                            </SpecificGoalTitle>
                            <SpecificGoalText>
                                <CustomText color="#fff" fontSize={handleFontSize}>
                                    Desenvolver e executar um planejamento pedagógico e psicológico que estimule a reflexão,
                                    autonomia, exercício da cidadania e consciência da realidade de cada cliente.
                                </CustomText>
                                <CustomText color="#fff" fontSize={handleFontSize}>
                                    Suprir as crianças, adolescentes e adultos em suas necessidades físicas e emocionais, 
                                    como: alimentação, higiene, solidariedade, atenção, simpatia, amabilidade, estimulação psicomotora e outros;
                                </CustomText>

                                <CustomText color="#fff" fontSize={handleFontSize}>
                                    Criar estratégias de ensino que sejam capazes de respeitar cada usuário nas suas 
                                    dificuldades, explorando suas potencialidades;
                                </CustomText>

                                <CustomText color="#fff" fontSize={handleFontSize}>
                                    Criar oportunidades aos familiares para expor e discutir suas ideias, dificuldades e 
                                    anseios a respeito de seus entes queridos.
                                </CustomText>
                            </SpecificGoalText>
                        </SpecificGoals>
                    </Goals>

                    <div>
                        <Lottie 
                            style={hasMediaMatch ? styles.container : styles.containerMobile}
                            options={defaultOptions(dinosaurData)}
                            isPaused={animationState.isPaused}
                            isStopped={animationState.isStopped}
                        />
                    </div>
                </GoalsContent>

            </GoalsContainer>
        </HistoryContainer>
    )
}

const styles = {
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