import styled from 'styled-components';

export const Container = styled.footer`
    position: absolute;
    bottom: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
