import Button from "../../../StyledComponents/Button"
import ButtonContainer from "../../../StyledComponents/ButtonContainer"
import styled from "styled-components"

const Name = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 0.5rem 0;
    margin-bottom:1rem;
`

const Role = ({ name, users }) => {
    return (
        <div>
            <Name>{name}</Name>
            <ButtonContainer>
                {users.map((user) => {
                    return <Button key={user}>{user}</Button>
                })}
            </ButtonContainer>
        </div>
    )
}

export default Role