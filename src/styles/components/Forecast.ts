import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    font-size: 1rem;

    width: 7.5rem;

    > img {
        width: 1.75rem;
        height: 1.75rem;

        margin: 1rem 0;

        position: relative;

        z-index: 2;
    }
`;

export const Temperature = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    font-size: 1.25rem;

    width: 100%;

    p + p {
        color: #f4ede899;
    }
`;
