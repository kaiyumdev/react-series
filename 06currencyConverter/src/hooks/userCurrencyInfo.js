/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

/* eslint-disable no-unused-vars */
function userCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
}

export default userCurrencyInfo;
