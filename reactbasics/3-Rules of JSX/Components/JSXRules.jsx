import React from 'react'

const JSXRules = () => {
  return (
    <div>
        <h1 className='rules'>
            JSXRules
        </h1>
        <p className='rule1'>
            JSX must return single parent element
        </p>
        <p className='rule2'>
            JSX elements must be properly closed
        </p>
        <p className='rule3'>
            JSX attributes are written using camelCase eg className instead of class htmlFor instead of for
        </p>
    </div>
  )
}
// JSX must return single parent element
// JSX elements must be properly closed
// JSX attributes are written using camelCase eg className instead of class htmlFor instead of for
export default JSXRules