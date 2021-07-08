import styled from 'styled-components';

export const HistoryContainer = styled.div`
    padding: 2rem 0 0 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AboutUsContainer = styled.section`
    display: flex;
    flex-direction: column;
`;

export const IdentityContainer = styled.section`
    padding: 2rem 6rem;
    width: 100%;

    background: #FF92CD;

    display: flex;
    flex-direction: column;

    @media(max-width: 450px) {
        align-items: center;
        padding: 2rem 0.5rem;
    }
`;

export const LabeledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 48px;

    @media(max-width: 990px) {
        display: flex;
        flex-direction: column;
    }
`;

export const GoalsContainer = styled.section`
    padding: 2rem 6rem;
    width: 100%;

    background: #FF92CD;

    display: flex;
    flex-direction: column;

    @media(max-width: 450px) {
        align-items: center;
    }
`;

export const GoalsContent = styled.div`
    display: flex;
    margin-top: 48px;

    @media(max-width: 860px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;
    }
`;

export const Goals = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;

    @media(max-width: 960px) {
        max-width: 500px;
    }
`;

export const GeneralGoals = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;

    @media(max-width: 860px) {
        display: flex;
        flex-direction: column;
    }
`;

export const SpecificGoals = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;

    @media(max-width: 860px) {
        display: flex;
        flex-direction: column;
    }
`;

export const GeneralGoalTitle = styled.div`
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 1.875rem 0;

    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 860px) {
        border-right: none;
    }
`;

export const GeneralGoalText = styled.div`
    padding: 1.875rem;
    border-bottom: 1px solid #fff;

    @media(max-width: 860px) {
        border-bottom: none;
    }
`;

export const SpecificGoalTitle = styled.div`
    border-right: 1px solid #fff;
    padding: 1.875rem 0;

    @media(max-width: 860px) {
        border-right: none;
        border-bottom: 1px solid #fff;
    }
`;

export const SpecificGoalText = styled.div`
    padding: 1.875rem;
`;
