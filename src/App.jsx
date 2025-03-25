import React from 'react'
import Header from './components/Header'
import Users from './components/Users'
import UnassignedUsers from './components/UnassignedUsers'
import styled from 'styled-components'
import Roles from './components/Roles/Roles'

const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;
`
const HeaderContainer = styled.div`
    display: flex;
    border-bottom: 1px solid gray;
    min-height: 7vh;
    align-items: center;
    justify-content: right;
`
const Body = styled.div`
    max-width: 1080px;
    margin: auto;
    padding: 0 1rem;
`

export default function App() {
    return (
        <Body>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <Container >
                <Roles />
                <UnassignedUsers />
            </Container>
        </Body>
    )
}
