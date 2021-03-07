import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 7rem;

    font-size: 1.25rem;

    > svg {
        width: 1.75rem;
        height: auto;
    }
`;

export const Temperature = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1.25rem;

    width: 100%;
`;
