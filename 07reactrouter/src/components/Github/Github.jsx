/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/kaiyumdev")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center m-4">
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
};

//another way to fetch the data by using loader methods
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/kaiyumdev");
  return response.json();
};
