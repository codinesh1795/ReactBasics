import React from 'react'
import { Data } from '../App'

const CompC = () => {
  return (
        <Data.Consumer>
            { (name) => {
                return <h1>name is :{name}</h1>
            }}
        </Data.Consumer>
  )
}

export default CompC

// once this is successfully done, question is if we need to pass multiple data from multiple levels above how do we do that
// one novice way is that we create and wrap component in another data provider and use nested data consumer returns to use that data, but this can cause app to wrapped in too many dataproviders, dataconsumers within nested returns
// again it becomes inefficient 
// which leads to birth of useContect hook