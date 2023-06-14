import React from 'react'
import { NumberedList } from './NumberedList'
import { LargePeopleListItem } from './People/LargePeopleListItem'
import { SmallPeopleLIstItem } from './People/SmallPeopleLIstItem'
import { LargeProductListItem } from './Product/LargeProductListItem'
import { SmallProductListItem } from './Product/SmallProductListItem'
import { RegularLIst } from './RegularLIst'

const People=[
  {
  name:"Ali",
  age:28,
  hairColor:"Brown",
  hobbies:['Cricket','Reading','Singing']
},
{
  name:"Shifad",
  age:24,
  hairColor:"Black",
  hobbies:['Football','Fighting','Singing']
},
{
  name:"Athul",
  age:20,
  hairColor:"White",
  hobbies:['Eating','Dancing','Football']
},
{
  name:"Abhishek",
  age:22,
  hairColor:"Black",
  hobbies:['Games','Reading','Footbal']
},

]
const Products=[
  {
  name:"Fan",
  price:1400,
  discription:"Usha Fans",
  rating:4.3
},
{
  name:"Moniter",
  price:16000,
  discription:"This Is A Dell Company 22 inch Moniter",
  rating:4.8
},
{
  name:"AC",
  price:28000,
  discription:"This Is A Loyid AC",
  rating:3.2
},
{
  name:"Pixel 5",
  price:18000,
  discription:"This Is a Google Ownership Mobile Company",
  rating:5
},


]


export const Parent = () => {
  return (
    <>
    <RegularLIst items={People} resourceName="person" itemComponent={SmallPeopleLIstItem}  />
     
    <NumberedList items={People} resourceName="person" itemComponent={LargePeopleListItem}  />
    <RegularLIst items={Products} resourceName="product" itemComponent={SmallProductListItem}  />
    <NumberedList items={Products} resourceName="product" itemComponent={LargeProductListItem}  />
    </>

    )
        
}
