import React, { useContext } from 'react'
import { Data,Data1 } from '../App'

const CompC = () => {
    // here within useContext we need to remeber where the context is coming from
    //
    const userName = useContext(Data)
    const userAge = useContext(Data1)
  return (
    <div>
        <h1>My name is: {userName}</h1>
        <h1>My age is: {userAge}</h1>
    </div>
  )
}

export default CompC
