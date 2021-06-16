import { useState } from "react";
import Button from "./Button"
import UpdateUser from "./UpdateUser";

const UserList = ({ user, onDelete, onSubmit }) => {
  const [showUpdate, setShowUpdate] = useState('true');

  const onUp = () => {
    setShowUpdate(!showUpdate)
  }

  const showUp = showUpdate;

  return (
    <div className='listItem'>
      <div className='itemContent'>
        <h3>Name: {user.name}</h3>
        <p>Age: {user.age}</p>
        <p>Address: {user.address}</p>
      </div>
      <div className='itemButton'>
        <Button onClick={() => (onDelete(user.id))} text='Delete' color='brown' />
        <Button
          onClick={onUp}
          text={showUp ? 'Update' : 'Close'}
          color={showUp ? '#0052e6' : 'brown'}
        />
      </div>
      {!showUp && <UpdateUser />}
    </div>
  )
}

export default UserList