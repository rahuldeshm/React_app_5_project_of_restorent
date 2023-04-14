import React from "react";
import OrderElement from "./OrderElement";
import "./Orders.css";

function Orders(props) {
  return (
    <div className="orders">
      <h1>Orders</h1>
      <h2>Table one</h2>
      {props.table1.map((e) => {
        return (
          <OrderElement
            key={e.id}
            price={e.price}
            dish={e.dish}
            id={e.id}
          ></OrderElement>
        );
      })}

      <h2>Table two</h2>
      {props.table2.map((e) => {
        return (
          <OrderElement
            key={e.id}
            price={e.price}
            dish={e.dish}
            id={e.id}
          ></OrderElement>
        );
      })}
      <h2>Table three</h2>
      {props.table3.map((e) => {
        return (
          <OrderElement
            key={e.id}
            price={e.price}
            dish={e.dish}
            id={e.id}
          ></OrderElement>
        );
      })}
    </div>
  );
}

export default Orders;
