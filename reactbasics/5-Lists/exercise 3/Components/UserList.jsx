// In react one will render lists with some type of loop. The 
// JS map() array method is generally the preffered method
import React from 'react'

const UserList = () => {
    const users = [
        {id:1, name:"Alice", age:25},
        {id:2, name:"Bob", age:30},
        {id:3, name:"Charlie", age:22},
    ]
  return (
    <div>
        {users.map(({id,name,age}) => (
        <ul key={Math.random()}>
            <li>
                {name}
            </li>
            <li>{age}</li>
        </ul>
    ))}
    </div>
  )
}

export default UserList