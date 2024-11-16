import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
  return (
    <div>
        <h2>Nothing to render here in CompB</h2>
        < CompC name={props.name} />
    </div>
  )
}

export default CompB