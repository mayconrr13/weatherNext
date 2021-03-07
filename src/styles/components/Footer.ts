import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin: 3rem 0 1rem 0;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 60px;

        padding-top: 0.5rem;

        > svg {
            width: 1.5rem;
            height: auto;
        }
    }
`;
