
import './App.css';
import {useState} from "react";
import TodoAdd from "./components/TodoAdd";

function App() {
  const [todos, setTodos] = useState([
    {todo: "Kodlama çalış."},
    {todo: "Kitap oku."},
    {todo: "Todo uygulaması yap."}
  ]);

  return (
    <div className="App w-100 d-flex flex-column justify-content-center">
      <h1 className="text-primary fw-bold">Todo Add</h1>
      <TodoAdd setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
