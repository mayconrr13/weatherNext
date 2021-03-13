import styled from 'styled-components';

export const Container = styled.form`
    width: 80vw;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.75rem 1rem 0 1rem;

    background: none;
    border-bottom: 1px solid #f4ede8;

    > input {
        height: 50px;
        width: calc(80vw - 50px);
        background: none;

        font-size: 1.5rem;

        &::placeholder {
            color: #f4ede8;
        }

        &:focus {
            outline: none;
        }
    }

    > button {
        height: 50px;
        width: 50px;
        background: none;

        > svg {
            height: 1.5rem;
            width: auto;
        }
    }
`;
