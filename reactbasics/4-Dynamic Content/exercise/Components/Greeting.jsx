import React from 'react'

const Greeting = () => {
    const message = "This is a dynamic message content"
    const dateTime = new Date()
    const name = "John"
  return (
    <div>
        <h1>
            {message}
        </h1>
        <p>
            Date: {dateTime.getDate()}
        </p>
        <p> Hello {name} on todays date {dateTime.getDate()}</p>
    </div>
  );
};

export default Greeting;