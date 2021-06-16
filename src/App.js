import { useState, useEffect } from 'react';
import './App.css';
import Users from './component/Users'
import Button from './component/Button';
import AddUser from './component/AddUser';
import UpdateUser from './component/UpdateUser'

function App() {
  const [showAddUser, setShowAddUser] = useState('false')
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const usersApi = await fetchUsers();
      setUsers(usersApi)
    }
    getUsers();
  }, [])

  const fetchUsers = async () => {
    const res = await fetch('https://6041af897f50e000173aae0c.mockapi.io/users')
    const data = await res.json()
    return data;
  }

  // Add
  const addUser = (user) => {
    const id = Math.floor(Math.random() * 1000);
    const now = new Date();
    const createdAt = now.toJSON();
    const newUser = { id, createdAt, ...user }
    setUsers([newUser, ...users])
  }

  // Update
  const updateUser = (user) => {
    const update = setUsers()
  }

  // Delete
  const deleteUser = (id) => {
    setUsers(users.filter((user) => (user.id !== id)))
  }


  // show Add form
  const onAdd = () => {
    setShowAddUser(!showAddUser)
  }
  const showAdd = showAddUser;

  const onClose = () => {
    setShowAddUser(!showAddUser)
  }

  return (
    <div className="App">
      <div className="box">
        <div>
          <h1>User Info</h1>

          <Button
            color={'#34b100'}
            text={'Add User'}
            onClick={onAdd}
          />

          {!showAddUser && <AddUser onAdd={addUser} onClose={onClose}/>}
        </div>
        {users.length > 0 ? <Users users={users} onDelete={deleteUser} onUpdate={updateUser} /> : <h3>No user</h3>}
      </div>
      </div>
  );
}

export default App;