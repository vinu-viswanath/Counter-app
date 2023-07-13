import './App.css';
import { useState } from 'react';

function App() {

  //state - To hold initial value, (counter)
  //setCounter
  //setCounter is used to increment counter

  const [counter, setCounter] = useState(0)

  //Create a function to increment counter
  function incrementCounter() {
    setCounter(counter + 1)
  }

  //Create a function to decrement counter
  function decrementCounter() {
    setCounter(counter - 1)
  }

  //Create a function to reset counter
  function resetCounter() {
    setCounter(0)
  }

  return (
    <div
    style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      margin:'289px',
      border:'1px solid black',
      padding:'15px'

    }} 
    
    
    className="App">

      <header className="App-header">

        <h3>Counter App</h3>
        <h1>{counter}</h1>

        <button
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '4px',
            margin: '5px'
          }}
          onClick={incrementCounter}>Increment</button>
        <button
          style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '4px',
            margin: '5px'
          }}

          onClick={decrementCounter}>Decrement</button>
        <button
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '4px',
            margin: '5px'
          }}
          onClick={resetCounter}>Reset</button>




      </header>
    </div>
  );
}

export default App;
