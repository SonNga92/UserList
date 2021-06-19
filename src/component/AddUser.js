import { useState } from "react"
import Button from "./Button"

const AddUser = ({ onAdd, onClose }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Nhap user');
      return
    }

    onAdd({ name, age, address })

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
        <form onSubmit={onSubmit} className='addUserForm'>
          <h2>Add new user: {name}</h2>

          <div className='form-control'>
            <input
              type='text'
              value={name}
              placeholder='Name:'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <input
              type='number'
              value={age}
              placeholder='Age:'
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <input
              type='text'
              value={address}
              placeholder='Address:'
              onChange={(e) => setAddress(e.target.value)}
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

export default AddUser