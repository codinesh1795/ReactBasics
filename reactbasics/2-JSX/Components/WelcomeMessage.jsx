import React from 'react'

export const WelcomeMessage = () => {
  return (
    <section id="section">
        <div>
            <h1 className='my-class'>
                Hello, World!
            </h1>
            <p>
                Welcome to learning jsx!
            </p>
        </div>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Enter your name'/>
        </form>
    </section>
  )
}
// also we cannot use for we have to use htmlFor in jsx as js compiler will think of normal for as for loop
// jsx requires al html tags to be closed
// each component can only return one parent here section is parent, but parent can have nested tags & logic
// when working with classes we cannot use the class keyword, we have to use className keyword in jsx
// eg <h1 class='my-class> code compiles but in browser inspect element we can see error Invalid DOM property class

export default WelcomeMessage;
