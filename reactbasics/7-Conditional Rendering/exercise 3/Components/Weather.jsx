import React from 'react'

const Weather = (props) => {
    console.log(props.temperature)
  
    if (props.temperature < 15){
    return <h2> Its cold outside</h2>
  }
  else if (props.temperature >15 && props.temperature < 25){
    return <h2>Its pleasant weather</h2>
  }
  else{
    return <h2>Its hot</h2>
  }
};

export default Weather