import "./App.css";
// import {useState} from "react";
// import Header from './Components/ders-01/Header';
// import Components from './Components/ders-01/Components';
// import User from "./Components/ders-02/User";
// import State from "./Components/ders-03/State";
// import Counter from "./Components/ders-03/Counter";
// import InputExample from "./Components/ders-03/InputExample";
// import Inputs from "./Components/ders-03/Inputs";
// import Lifecycle from "./Components/ders-04/Lifecycle";
// import Unmount from "./Components/ders-04/Unmount";
// import UseStyle from "./Components/ders-05/UseStyle/stil";
// import FirstStil from "./Components/ders-05/FirstStil/stil";
// import SecondStil from "./Components/ders-05/SecondStil/stil";
// import Fetching from "./Components/ders-06/Fetching";
import FormManagemant from "./Components/ders-07/FormManagemant";

/*const friendsName = [
  {
    id: 1,
    name: 'Furkan'
  },
  {
    id: 2,
    name: 'Gizem'
  },
  {
    id: 3,
    name: 'Hilal'
  },
  {
    id: 4,
    name: 'Kader'
  },
];*/

function App() {
  // const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {/* ders-01 */}
      {/*
        <Header />
        <Components />
      */}

      {/* ders-02 */}
      {/*
        <User 
        name="Zehra" 
        surname="İkizler" 
        age={21} 
        isLoggedIn={true} 
        friends={friendsName}
        address={
          {
            title: "Akçaabat/Trabzon",
            zip: 1234
          }
        }
        />
      */}

      {/* ders-03 */}
      {/* <State />
        <Counter />
        <InputExample />
        <Inputs /> */}

      {/* ders-04 */}
      {/* <Lifecycle /> */}

      {/* {isVisible && <Unmount />}      
        <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button> */}

      {/* ders-05 */}

      {/* <UseStyle />
        <FirstStil />
        <SecondStil /> */}

      {/* ders-06 */}
      
      {/* <Fetching /> */}

      {/* ders-07 */}

      <FormManagemant />
    </div>
  );
}

export default App;
