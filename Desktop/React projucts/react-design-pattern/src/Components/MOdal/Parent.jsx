import React from 'react'
import { SmallPeopleLIstItem } from '../ListItem/People/SmallPeopleLIstItem'
import { Modal } from './Modal'


const person=  {
    name:"Ali",
    age:28,
    hairColor:"Brown",
    hobbies:['Cricket','Reading','Singing']
  }

export const Parent = () => {
  return (
    <Modal>
        <SmallPeopleLIstItem person={person} pp={ss} ikjhk={sdds} />
    </Modal>
  )
}