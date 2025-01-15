import { createContext, useState } from "react";
import "./App.css";
import OneWayBinding from "./components/onewaybinding";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
function App() {
  const [theme, setTheme] = useState<string>("dark");


  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div>Hello World</div>
        <OneWayBinding></OneWayBinding>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
