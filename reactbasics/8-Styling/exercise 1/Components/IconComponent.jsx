import React from 'react'
import { FaBeer } from 'react-icons/fa'
const IconComponent = () => {
  return (
    <div>
        <FaBeer />
        <FaBeer size={30}/>
        <FaBeer size={50} color='yellow'/>
        
    </div>
  )
}

export default IconComponent