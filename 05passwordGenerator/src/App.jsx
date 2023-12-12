/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";

    if(numberAllowed) str +="123456789"
    if(charAllowed) str +="!@#$^&*-_=+{}[]~`"
  },[length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <h1 className="text-4xl text-center text-white ">Password Generator</h1>
    </>
  );
}

export default App;
