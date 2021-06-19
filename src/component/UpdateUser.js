import { useState } from "react"
import Button from "./Button"

const UpdateUser = ({ user, onUpdate, onClose }) => {
  const [name, setName] = useState(user.name)
  const [age, setAge] = useState(user.age)
  const [address, setAddress] = useState(user.address)

  const onSubmit = (e) => {
    e.preventDefault()
    const { id, createdAt } = user
    onUpdate({ id, createdAt, name, age, address })

    setName('');
    setAge('');
    setAddress('');
    onClick()
  }

  ///close form
  const onClick = () => onClose();

  return (
    <div className='addUserAll'>
      <div className='addUserBox'>
        <form onSubmit={onSubmit}>
          <h2>Update User: {user.name}</h2>
          <div className='form-control'>
            <input
              type='text'
              value={name}
              onChange={e => (setName(e.target.value))}
            />
          </div>
          <div className='form-control'>
            <input
              type='number'
              value={age}
              onChange={e => (setAge(e.target.value))}
            />
          </div>
          <div className='form-control'>
            <input
              type='text'
              value={address}
              onChange={e => (setAddress(e.target.value))}
            />
          </div>
          <input
            className='submit'
            type='submit'
            value='Save'
          />
        </form>
        <Button text={'Close'} onClick={onClick} color={'#b5b5b5'} />
      </div>
    </div>
  )
}

export default UpdateUser