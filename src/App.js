import "./App.css";
import React, { useState } from "react";
import NewOrder from "./Components/NewOrder";
import Orders from "./Components/Orders";

function App() {
  const [table1, setEnteredOrder1] = useState([]);
  const [table2, setEnteredOrder2] = useState([]);
  const [table3, setEnteredOrder3] = useState([]);
  const onSubmit = (a, b, c, d) => {
    localStorage.setItem(a, JSON.stringify({ b, c, d }));
    if (d === "table1") {
      setEnteredOrder1([...table1, { id: a, price: b, dish: c }]);
    } else if (d === "table2") {
      // console.log([...table2, { id: a, price: b, dish: c }]);
      setEnteredOrder2([...table2, { id: a, price: b, dish: c }]);
    } else {
      setEnteredOrder3([...table3, { id: a, price: b, dish: c }]);
    }
  };
  return (
    <div className="App">
      <NewOrder onSubmit={onSubmit}></NewOrder>
      <Orders table1={table1} table2={table2} table3={table3}></Orders>
    </div>
  );
}

export default App;
