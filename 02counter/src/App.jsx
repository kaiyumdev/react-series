import { useState } from "react";
import "./App.css";

function App() {
  //start react counter
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <div>
        <h1>Counter Value: {counter}</h1>
        <button onClick={addValue}>Add Value:{counter} </button>
        <br />
        <button onClick={removeValue}>Remove Value: {counter} </button>
      </div>
    </>
  );
}

export default App;
