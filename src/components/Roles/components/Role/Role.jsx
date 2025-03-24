import Users from "./components/Users";
import styles from './Role.module.css'

const Role = ({ name, child, users }) => (
    <div className={styles.container}>
        <div className={styles.name}>
            {name}
        </div>
        <div className="flex gap-4">
            {child && <Role child={child.child} name={child.name} users={child.users} />}
            <Users data={users} />
        </div>
    </div>
)
export default Role;