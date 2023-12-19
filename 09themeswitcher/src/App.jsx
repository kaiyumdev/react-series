/* eslint-disable react-hooks/rules-of-hooks */
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./context/Theme";
import { useState, useEffect } from "react";

const [themeMode, setThemeMode] = useState("light");

const lightTheme = () => {
  setThemeMode("light");
};

const darkTheme = () => {
  setThemeMode("dark");
};

// actual change in theme

useEffect(() => {
  document.querySelector("html").classList.remove("light", "dark");
  document.querySelector("html").classList.add(themeMode);
}, [themeMode]);

function App() {
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn></ThemeBtn>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card></Card>
          </div>
        </div>
      </div>
      ;
    </ThemeProvider>
  );
}

export default App;
