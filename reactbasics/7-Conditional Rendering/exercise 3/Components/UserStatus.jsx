import React from 'react'

const UserStatus = (props) => {
    if (props.loggedIn && props.isAdmin){
  return (
    <h2>Welcome Admin</h2>
  )
}
return <h2>Welcome user</h2>
}

export default UserStatus