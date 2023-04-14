import React, { useState } from "react";
import "./NewOrder.css";

function NewOrder(props) {
  const [enteredDish, setEnteredDish] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredId, setEnteredId] = useState("");
  const [enteredTable, setEnteredTable] = useState("table1");

  const enteredDishHandler = (e) => {
    setEnteredDish(e.target.value);
  };
  const enteredPriceHandler = (e) => {
    setEnteredPrice(e.target.value);
  };
  const enteredIdHandler = (e) => {
    setEnteredId(e.target.value);
  };
  const enteredTableHandler = (e) => {
    setEnteredTable(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(enteredId, enteredPrice, enteredDish, enteredTable);
    setEnteredDish("");
    setEnteredId("");
    setEnteredPrice("");
    // setEnteredTable("");
  };
  return (
    <form onSubmit={onSubmitHandler} className="form">
      <h1>New Order</h1>
      <label>Unique Order Id</label>
      <br></br>
      <input
        type="number"
        value={enteredId}
        onChange={enteredIdHandler}
      ></input>
      <br></br>
      <label>Choose Price</label>
      <br></br>

      <input
        type="number"
        value={enteredPrice}
        onChange={enteredPriceHandler}
      ></input>
      <br></br>
      <label>Choose Dish</label>
      <br></br>
      <input
        type="text"
        value={enteredDish}
        onChange={enteredDishHandler}
      ></input>
      <br></br>
      <label>Table</label>
      <br></br>
      <select value={enteredTable} onChange={enteredTableHandler}>
        <option>table1</option>
        <option>table2</option>
        <option>table3</option>
      </select>
      <br></br>
      <button>Add to bill</button>
    </form>
  );
}

export default NewOrder;
