import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 2rem 0;

    width: 80vw;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        > svg {
            width: 2.25rem;
            height: auto;
        }

        > p {
            font-size: 1.25rem;
        }
    }
`;
