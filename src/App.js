import { useState, useEffect } from 'react';
import './App.css';
import Users from './component/Users'
import Button from './component/Button';
import AddUser from './component/AddUser';

function App() {
  const [showAddUser, setShowAddUser] = useState('false')
  const [users, setUsers] = useState([])
  const [reload, setReload] = useState()

  useEffect(() => {
    const getUsers = async () => {
      const usersApi = await fetchUsers();
      setUsers(usersApi)
    }

    getUsers();
  }, [reload])

  const fetchUsers = async () => {
    const res = await fetch('https://6041af897f50e000173aae0c.mockapi.io/users')
    const data = await res.json()
    return data;
  }

  // Add
  const addUser = async (user) => {
    await fetch(`https://6041af897f50e000173aae0c.mockapi.io/users/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    setReload((prev) => prev + 1)
  }

  //Update 
  const getUserUpdate = async (userUp) => {
    setUsers(users.map((user) => (user.id === userUp.id ? userUp : user)));

    await fetch(`https://6041af897f50e000173aae0c.mockapi.io/users/${userUp.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(userUp)
    })
    setReload((prev) => prev + 1)
  }

  // Delete
  const deleteUser = async (id) => {
    await fetch(`https://6041af897f50e000173aae0c.mockapi.io/users/${id}`, {
      method: 'DELETE'
    })

    setUsers(users.filter((user) => (user.id !== id)))
  }

  // show Add form
  const onAdd = () => {
    setShowAddUser(!showAddUser)
  }

  return (
    <div className="App">
      <div className="box">
        <div>

          <input type='search' placeholder='Search user:' />
          <h1>User Info</h1>

          <Button
            color={'#34b100'}
            text={'Add User'}
            onClick={onAdd}
          />

          {!showAddUser && <AddUser onAdd={addUser} onClose={onAdd} />}
        </div>
        {users.length > 0 ? <Users users={users} onDelete={deleteUser} onUpdate={getUserUpdate} /> : <h3>No user</h3>}
      </div>
    </div>
  );
}

export default App;
