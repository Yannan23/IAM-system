import styled, { css } from "styled-components"

const RoleContainer = styled.div`
    border: 1px solid gray;
    border-radius:0.5rem;
    padding: 0.5rem 1rem;
    margin-top: 1rem;

    ${(props) => {
        switch (props.variant) {
            case 'gray':
                return css`
                    background-color: var(--background-color);
                `;
            default:
                return css`
                    background-color: white;
                `;
        }
    }

    }
`

export default RoleContainer