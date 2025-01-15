import { createContext, useState } from "react";
import "./App.css";


 
import ProductSelected from "./components/Product copy";

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
        <ProductSelected></ProductSelected>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
