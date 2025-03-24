import Users from "../Users"

const UnassignedUsers = () => (
    <div className="ml-4 bg-gray-100 h-full p-4">
        <div className="mb-4">UnassignedUsers</div>
        <div>
            <Users data={['Alice', 'Amy', 'Lemon']} />
        </div>
    </div>
)

export default UnassignedUsers