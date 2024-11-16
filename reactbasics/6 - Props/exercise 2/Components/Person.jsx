// Props/ properties are arguments passed into React components
// props allows us to pass data from parent component to child component
// props are passed to components via HTML attributes
import React from 'react'


const Person = ({name,age}) => {
    return <div>
        <h2>Name : {name}</h2>
        <p> Age of {name} is {age} </p>
    </div>
}
export default Person