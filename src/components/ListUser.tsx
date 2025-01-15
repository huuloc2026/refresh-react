import { useContext } from "react";
import { ThemeContext } from "../App";

const ListUser = () => {
  const themeData = useContext(ThemeContext);
  if (!themeData) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }
  const { theme, setTheme } = themeData;
  
  return (
    <div>
      ListUser
      <div className={theme}>Test</div>
      <h2>{theme}</h2>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle
      </button>
    </div>
  );
};

export default ListUser;
