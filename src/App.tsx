import { createContext, useState } from "react";
import "./App.css";


 

import Todolist from "./components/Todolist";
import UEFRefresh from "./components/useEffectRefresh";
import TimerIntervalTest from "./components/TimerInterval";

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
        <button onClick={() => handleMountTodo()}> Mount To do list </button>
        {toggleTodo ? <Todolist></Todolist> : null}
        <button onClick={() => handleMount()}> Mount </button>
        {toggle ? <TimerIntervalTest></TimerIntervalTest> : null}

      </ThemeContext.Provider>
    </>
  );
}

export default App;
