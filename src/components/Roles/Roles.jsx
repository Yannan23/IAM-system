import Role from "./components/Role/Role";
import styles from './Roles.module.css'


const Roles = () => (
    <div className={styles.container}>
        <Role
            name='User'
            users={['Alice', 'Bob']}
            child={{
                name: 'System Manager',
                users: ['daisy', 'LuLu', 'Jane'],
                child: {
                    name: 'Admin',
                    users: ['Bear', 'Gummy', 'Danny', 'Sun']
                }
            }}
        />
        <Role name='Service' users={['Kim', 'Charlie']} />
    </div>
)

export default Roles;