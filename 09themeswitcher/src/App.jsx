/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
import "./App.css";
import { ThemeProvider } from "./context/Theme";
import { useState, useEffect } from "react";

const [themeMode, setThemeMode] = useState();

const lightTheme = () => {
  setThemeMode("light");
};

const darkTheme = () => {
  setThemeMode("dark");
};

//actual change in theme
useEffect(() => {
  document.querySelector("html").classList.remove("light", "dark");
  document.querySelector("html").classList.add(themeMode);
}, [themeMode]);

function App() {
  return;
  <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>

        <div className="w-full max-w-sm mx-auto"></div>
      </div>
    </div>
    ;
  </ThemeProvider>;
}

export default App;
