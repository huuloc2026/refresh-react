import { createContext, useState } from "react";
import "./App.css";


 
import ProductSelected from "./components/Product copy";
import Todolist from "./components/Todolist";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
function App() {
  const [theme, setTheme] = useState<string>("dark");
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleTodo, setToggleTodo] = useState<boolean>(false);
  const handleMount = () => {
    setToggle(!toggle)
  }
  const handleMountTodo = () => {
    setToggleTodo(!toggleTodo);
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div>Hello World</div>
        <button onClick={() => handleMount()}> Mount </button>
        {toggle ? <ProductSelected></ProductSelected> : null}
        <button onClick={() => handleMountTodo()}> Mount To do list </button>
        {toggleTodo ? <Todolist></Todolist> : null}
      </ThemeContext.Provider>
    </>
  );
}

export default App;
