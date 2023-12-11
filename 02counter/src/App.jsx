/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
  //start react counter
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    // এক্ষেত্রে এর মান হবে ১৬ শুধুমাত্র ১ ব্রিদ্ধি পাবে কারণ useState সবগুলা মানকে বান্ডেল হিসেবে গ্রহণ করে।
  };

  const addNewValue = () => {
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    // এক্ষেত্রে এর মান হবে ১৯ কারণ useState সবগুলা মানকে বান্ডেল হিসেবে গ্রহণ করে না আলাদাভাবে গ্রহণ করে।
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
