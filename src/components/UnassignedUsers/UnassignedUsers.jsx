import React from 'react'
import Role from '../Roles/components/Role/Role'
import RoleContainer from '../StyledComponents/RoleContainer'
import Users from '../Users'

export default function UnassignedUsers() {
    return (
        <RoleContainer variant='gray'>
            <div>UnassignedUsers</div>
            <Users data={['Lily', 'bob']} />
        </RoleContainer>
    )
}
