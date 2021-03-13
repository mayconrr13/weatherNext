import styled, { css } from 'styled-components';

interface ContainerProps {
    info: boolean;
}

export const Container = styled.footer<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin: 3rem 0 1rem 0;

    ${(props) =>
        !props.info &&
        css`
            position: absolute;
            bottom: 1rem;
        `}

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
