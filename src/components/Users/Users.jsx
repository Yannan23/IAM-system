import React from 'react'
import Button from '../StyledComponents/Button'
import ButtonContainer from '../StyledComponents/ButtonContainer'
import styled from 'styled-components'

const Container = styled.div`
    margin-top:1rem;
`

function Users({ data }) {
    return (
        <Container>
            <ButtonContainer>
                {data.map((user) => {
                    return <Button key={user}>{user}</Button>
                })}
            </ButtonContainer>
        </Container>
    )
}

export default Users