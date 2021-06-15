import { useState } from "react"

const UpdateUser = ({ user, onUpdate }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Nhap user');
            return
        }

        onUpdate({ name, age, address })
    }

    return (
        <form onSubmit={onSubmit}>
            <p>--------</p>
            <div className='form-control'>
                <h3>Update User: {name}</h3>
                <label>Name:</label>
                <input
                    type='text'
                    value={name}
                    placeholder='Your Name'
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Age:</label>
                <input
                    type='number'
                    value={age}
                    placeholder='123'
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Address:</label>
                <input
                    type='text'
                    value={address}
                    placeholder='123 asd'
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <input
                className='submit'
                type='submit'
                value='Save'
            />
            <p>--------</p>
        </form>
    )
}

export default UpdateUser