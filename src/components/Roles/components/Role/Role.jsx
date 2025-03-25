import styled from "styled-components"
import Users from '../../../Users'
import RoleContainer from "../../../StyledComponents/RoleContainer"

const Name = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 0.5rem 0;
`

const Body = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`

const Role = ({ name, users, child }) => {
    return (
        <RoleContainer>
            <Name>{name}</Name>
            <Body>
                {child && <Role name={child.name} child={child.child} users={child.users} />}
                <Users data={users} />
            </Body>
        </RoleContainer>
    )
}

export default Role