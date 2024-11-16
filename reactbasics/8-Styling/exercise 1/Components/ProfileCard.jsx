import React from 'react'
// set bgcolor to light grey
// set padding to 15px
// set border radius to 8px
// set text color to black
const ProfileCard = () => {
    const styles = {
        backgroundColor:'lightgrey', 
        padding: '15px',
        borderRadius:'8px',
        color:'black' 
    }
  return (
    <div style = {styles}>
        <h1>ProfileCard</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque accusantium veniam et, aut nam, tempora aspernatur reprehenderit, a sint illo distinctio at recusandae aperiam optio doloribus magni. Minima, dolore distinctio!</p>
    
    </div>
  )
}

export default ProfileCard