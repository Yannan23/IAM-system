import styled from 'styled-components'

const User = styled.button`
    cursor:pointer;
    border:1px solid var(--border-color);
    padding:8px 16px;
    border-radius: var(--border-radius);
    &:hover{
        background-color: #f3f4f6
    }
`
const Container = styled.div`
    display: flex;
    gap:0.5rem;
    align-items:flex-start;
    flex-Wrap: wrap;
    align-content: flex-start
`

const Users = ({ data }) => {
    return (
        <Container>
            {data.map((user) => {
                return <User key={user}>{user}</User>
            })}
        </Container>


    )
}
export default Users;