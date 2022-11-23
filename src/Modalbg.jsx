import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from './firebase';

const Modalbg = ({ props, name }) => {
    const [changedname, setChangedname] = useState('')

    const handleChange = (e, props) => {
        e.preventDefault()
        let obj = {
            name: changedname
        }
        updateUser(obj.name, props)
    }

    const updateUser = async (name, props) => {
        const userDoc = doc(db, "users", props);
        const newFields = { name: name };
        await updateDoc(userDoc, newFields);
    };

    // Update method

    return (
        <div>
            <form className='formUpdated' onSubmit={(e) => handleChange(e, props)}>
                <input onChange={(e) => setChangedname(e.target.value)} placeholder='name' type="text" />
                <button type='submit'>Change</button>
            </form>
        </div>
    )
}

export default Modalbg
