import React from 'react'
import CompB from './CompB'

const CompA = (props) => {
  return (
    <div>
        <h2>Nothing to render here in CompA</h2>
        < CompB name={props.name} />
    </div>
  )
}

export default CompA