import Role from "./components/Role/Role";
import RoleContainer from "../StyledComponents/RoleContainer";


const Roles = () => {
    return (
        <div>
            <RoleContainer>
                <Role
                    name='User'
                    users={['Lulu', 'Lucy', 'Jason']}
                />

            </RoleContainer>
            <RoleContainer>
                <Role name='Service' users={['Jason', 'Lucia']} />
            </RoleContainer>

        </div>
    )
}

export default Roles;