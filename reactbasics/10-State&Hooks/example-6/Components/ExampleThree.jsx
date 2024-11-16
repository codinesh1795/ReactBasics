import { useState, useEffect } from "react";

const ExampleThree = () => {
  // Initialize state from localStorage or default to an empty string
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  // Update localStorage whenever the name changes
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleChange = (event) => {
    // on each keystroke setName to value pressed
    setName(event.target.value);
  };

  const handleClear = () => {
    // when clear button is pressed set name to empty string
    setName("");
  };

  return (
    // create an input box, have a placeholder value, set initial value and onchange property

    <div>
      <h1>Your Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
  // have a clear button to clear data from localstorage
};

export default ExampleThree;