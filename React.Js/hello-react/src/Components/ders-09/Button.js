import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";

export default function Button() {

    const data = useContext(ThemeContext);

  return (
    <div>Button {data} </div>
  )
}
