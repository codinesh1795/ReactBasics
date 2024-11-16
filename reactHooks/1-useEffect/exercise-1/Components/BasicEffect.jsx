import React from 'react'
import { useEffect } from 'react'

const BasicEffect = () => {
        useEffect(() => {
            console.log('BasicEffect component loaded')
        },[])
    
  return (
    <div>
        <h1>Check console to see msg</h1>
    </div>
  )
};

export default BasicEffect