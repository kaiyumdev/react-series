/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import userCurrencyInfo from "./hooks/userCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = userCurrencyInfo(from);
  return <></>;
}

export default App;
