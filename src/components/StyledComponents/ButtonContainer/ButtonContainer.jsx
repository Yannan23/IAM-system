import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items:flex-start;
    align-content: flex-start;

    &> *:not(:last-child){
        margin-right: 0.5rem;
    }
`

export default ButtonContainer