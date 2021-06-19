import { useState } from "react";
import Button from "./Button"
import UpdateUser from "./UpdateUser";


const UserList = ({ user, onDelete, onUpdate }) => {
  const [showUpdate, setShowUpdate] = useState('false');

  const onShowUp = () => onCloseUpdate()

  // show Update form
  const onCloseUpdate = () => {
    setShowUpdate(!showUpdate)
  }
  return (
    <div className='listItem'>
      <div className='itemContent'>
        <h3>Name: {user.name}</h3>
        <p>Age: {user.age}</p>
        <p>Address: {user.address}</p>
      </div>
      <div className='itemButton'>
        <Button
          onClick={() => { onShowUp() }}
          onClose={onCloseUpdate}
          text={'Update'}
          color={'#0052e6'}
        />
        <Button onClick={() => (onDelete(user.id))} text='Delete' color='brown' />
      </div>
      {!showUpdate && <UpdateUser user={user} onClose={onCloseUpdate} onUpdate={onUpdate} />}
    </div>
  )
}

export default UserList