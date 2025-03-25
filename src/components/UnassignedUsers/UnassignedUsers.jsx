import React from 'react'
import styled from 'styled-components'
import Role from '../Roles/components/Role/Role'
import RoleContainer from '../StyledComponents/RoleContainer'

export default function UnassignedUsers() {
    return (
        <RoleContainer variant='gray'>
            <Role name='UnassignedUsers' users={['Bob', 'Leo', 'Stephanie']} />
        </RoleContainer>
    )
}
