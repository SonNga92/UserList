import UserList from './UserList'

const Users = ({ users, onDelete, updateUser }) => {

  return (
    <>
      {users.map(user => (
        <UserList

          key={user.id}
          user={user}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}

export default Users;