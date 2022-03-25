import { useContext } from "react";

import Button from "./Button";
import Header from "./Header";

import ThemeContext from "../../Context/ThemeContext";

export default function Container() {

    const {theme} = useContext(ThemeContext);

  return (
    <div className={`App ${theme === 'dark' ? theme : ""}`}>
        <Button />
        <Header />
    </div>
  )
}
