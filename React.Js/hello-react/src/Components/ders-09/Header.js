import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";

export default function Header() {

    const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
        <h3>Header</h3>
        Active Theme: {theme} 
        <br/>
        <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>Change Theme</button>
    </div>
  )
}
