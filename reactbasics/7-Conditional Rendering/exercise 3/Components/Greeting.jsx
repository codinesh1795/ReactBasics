import React from 'react'

const Greeting = (props) => {
  return props.timeOfDay === 'morning' ? (<h2>GM</h2>) : (<h2>GA</h2>)
}

export default Greeting