import React from 'react'

export const UserInfoHOC = ({user}) => {
    const {name,username,email}=user || {};

  return user  ? (
    <>
    <h3>{name}</h3>
    <p>User Name : {username}</p>
    <p>Email: {email}</p>
    
    </>
  ):
  <p>Loading ...</p>
}
