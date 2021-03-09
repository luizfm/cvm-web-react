import React from 'react';

import cvmBuildingImage from '../../assets/cvmbuilding.jpg'
import kidsImage from '../../assets/fantasykids.jpg'
import studentsImage from '../../assets/students.png'

import CustomText from '../../components/CustomText';
import Flex from '../../components/Flex';
import Separator from '../../components/Separator';

import TextWithImage from '../../components/TextWithImage';

import { HistoryContainer, IdentityContainer } from './style';

const History = () => {
    return (
        <HistoryContainer>
            <CustomText color="#12AFCB">Entenda nossa História</CustomText>

            <TextWithImage imagePath={cvmBuildingImage} margin="24px" rotateImage="12deg">
                <Flex marginBottom="24px">
                    <CustomText>
                        Entidade filantrópica assistencial sem fins lucrativos, declarada de utilidade pública 
                        pelo Governo Municipal, Estadual e Federal, esta registrada no Conselho Nacional de 
                        Assistência Social e possui Certificado de Filantropia.
                    </CustomText>
                </Flex>

                <CustomText>
                    Fundada em 1º de novembro de 1978 para ajudar crianças, adolescentes e adultos 
                    abandonados e com risco social.
                </CustomText>
            </TextWithImage>

            <TextWithImage imagePath={kidsImage} margin="48px" direction="row-reverse" rotateImage="-12deg">
                <CustomText>
                    Importante obra, resultado do trabalho de “Dona Jandira Jovita da Rosa” e de 
                    “Dona Geny Julia Feijó”, evangélicas que em 1978 realizaram a missão de fundar 
                    esta entidade.
                </CustomText>

                <Flex marginBottom="24px">
                    <CustomText>
                    O ideal inicial de Dona Jandira e Dona Geny era iniciar o atendimento com 01 
                    (uma) creche para crianças de 0 a 06 anos. Em julho de 1980 Dona Geny 
                    faleceu e em junho de 1985 faleceu também Dona Jandira.
                    </CustomText>
                </Flex>

                <CustomText>
                    Em 1986, a instituição fundou o Lar Jandira Jovita da Rosa, para atender crianças 
                    de 0 a 18 anos abandonados e/ou vitimas de maus tratos, em 1996 foi aberta a 
                    Comunidade Terapêutica Dona Geny Julia Feijó, que no início só atendia crianças e 
                    adolescentes, e a partir do ano de 2007 passou a atender adultos.
                </CustomText>
            </TextWithImage>

            <TextWithImage imagePath={studentsImage} margin="48px" flex>
                <CustomText>
                    Importante obra, resultado do trabalho de “Dona Jandira Jovita da Rosa” e de 
                    “Dona Geny Julia Feijó”, evangélicas que em 1978 realizaram a missão de fundar 
                    esta entidade.
                </CustomText>

                <Flex marginBottom="24px">
                    <CustomText>
                    O ideal inicial de Dona Jandira e Dona Geny era iniciar o atendimento com 01 
                    (uma) creche para crianças de 0 a 06 anos. Em julho de 1980 Dona Geny 
                    faleceu e em junho de 1985 faleceu também Dona Jandira.
                    </CustomText>
                </Flex>

                <CustomText>
                    Em 1986, a instituição fundou o Lar Jandira Jovita da Rosa, para atender crianças 
                    de 0 a 18 anos abandonados e/ou vitimas de maus tratos, em 1996 foi aberta a 
                    Comunidade Terapêutica Dona Geny Julia Feijó, que no início só atendia crianças e 
                    adolescentes, e a partir do ano de 2007 passou a atender adultos.
                </CustomText>
            </TextWithImage>

            <IdentityContainer>
                <CustomText color="#fff">Da nossa identidade</CustomText>

                <Flex marginTop="48px" marginBottom="24px">
                    <Separator backgroundColor="#fff"/>
                </Flex>
            </IdentityContainer>
        </HistoryContainer>
    )
}

export default History;