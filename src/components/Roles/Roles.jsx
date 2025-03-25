import Role from "./components/Role/Role";
import RoleContainer from "../StyledComponents/RoleContainer";


const Roles = () => {
    return (
        <div>
            <Role
                name='User'
                users={['Lulu', 'Lucy', 'Jason']}
                child={{
                    name: 'Admin',
                    users: ['Lily', 'Lucy', 'LiWei', 'Charlie'],
                    child: {
                        name: 'Manager',
                        users: ['Donal', 'Daisy'],
                        // child: {
                        //     name: 'Designer',
                        //     users: ['Lily', 'Lucy', 'LiWei', 'Charlie']
                        // }
                    }
                }}
            />
            <Role name='Service' users={['Jason', 'Lucia']} />
        </div>
    )
}

export default Roles;