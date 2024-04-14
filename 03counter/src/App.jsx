import { useState } from "react";

function App() {


  let [counter , setCounter] = useState(15)

  const addValue = () =>{
    // counter = counter + 1; 
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter(counter + 1);
    console.log("clicked",counter);
    
  }
  const subValue = () =>{
    // counter = counter + 1; 
    setCounter(counter - 1);
    setCounter(counter - 1);
    setCounter(counter - 1);
    console.log("clicked",counter);
    
  }
  return (
    <>
      <h1>hello world</h1>
      <h1>Counter Value : {counter}</h1>

      <button
      onClick={addValue} >Increment {counter}</button>
      <br />
      
      <button
      onClick={subValue}>Decrement {counter} </button>
    </>
  )
}

export default App
