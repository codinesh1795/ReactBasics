import React from 'react'
// set bgcolor to light blue
// set padding to 20px
// set border radius to 10px
// set text color to dark blue

const StyledCard = () => {
  return (
    <div style={{ 
        backgroundColor:'lightblue', 
        padding: '20px',
        borderRadius:'10px',
        color:'darkblue' }}>
        <h1>StyledCard</h1>
        <p>Adding a para</p>
        </div>
  )
}

export default StyledCard