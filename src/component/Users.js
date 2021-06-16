import UserList from './UserList'

const Users = ({ users, onDelete, updateUser }) => {

  return (
    <div className='list'>
      {users.map(user => (
        <UserList
          key={user.id}
          user={user}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default Users;