import React from "react";
import './App.css';
import OrderForm from "./PizzaForm";

const App = () => {
  return (
    <div className="app">
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <OrderForm />
    </div>
  );
};
export default App;
