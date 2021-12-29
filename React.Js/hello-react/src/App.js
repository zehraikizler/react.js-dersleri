import './App.css';

// import Header from './Components/ders-01/Header';
// import Components from './Components/ders-01/Components';
import User from "./Components/ders-02/User";

const friendsName = [
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
];

function App() {
  return (
    <div>
      
      {/* ders-01 */}

      {/*
        <Header />
        <Components />
      */}

      {/* ders-02 */}
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
    </div>
  );
}

export default App;
