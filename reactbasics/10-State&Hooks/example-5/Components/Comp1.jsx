import React from 'react'

const Comp1 = ({count, onClickHandler}) => {
    const handleClick = () => onClickHandler()
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default Comp1;