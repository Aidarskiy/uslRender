import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import FormPas from "./components/FormPas";
import Receipts from "./components/Receipts";

function App() {
  const [count, setCount] = useState(0);
  const [meal, setMeal] = useState("");

  return (
      <div className="App">
        <Counter />
        <Receipts meal={meal} setMeal={setMeal} />
        {/* <Ingredients meal={meal} setMeal={setMeal}/> */}
        <FormPas />
      </div>
  );
}

export default App;
