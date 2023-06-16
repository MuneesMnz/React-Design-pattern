import React from 'react'
import { withEditableUser } from './withEditableUser'

export const UserInfoForm = withEditableUser(({user,onChangeUser,onSaveUser,onResetUser})=>{
    const {name,username,email}=user || {};

    return user ? (
        <>
            <label>Name :
            <input type='text' value={name} onChange={e=>onChangeUser({name:e.target.value})} />
            </label>
            <label>user Name :
            <input type='text' value={username} onChange={e=>onChangeUser({username:e.target.value})} />
            </label>
            <label>Email :
            <input type='text' value={email} onChange={e=>onChangeUser({email:e.target.value})} />
            </label>
            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save Changes</button>
        </>
    ):<p>Loading</p>
},1) 
