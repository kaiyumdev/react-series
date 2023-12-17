/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/kaiyumdev")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center m-4">
      Github Followers:{data.followers}
    </div>
  );
};
