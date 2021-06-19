import UserList from './UserList'

const Users = ({ users, onDelete, onUpdate, onClose }) => {

  return (
    <div className='list'>
      {users.map(user => (
        <UserList
          key={user.id}
          user={user}
          onDelete={onDelete}
          onClose={onClose}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  )
}

export default Users;