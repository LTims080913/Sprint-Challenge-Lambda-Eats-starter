import React from "react";
import './App.css';
import OrderForm from "./PizzaForm";
import Popup from 'reactjs-popup';

const App = () => {
  return (
    <div className="app">
      <h1>Lambda Eats</h1>
      <h1>Hungry? <br/> Order a Pizza!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue tempor mi, et efficitur risus porta a. Phasellus nisl leo, varius a pharetra at, maximus ut risus. Nullam lobortis ligula felis. Proin pretium nibh eu erat viverra, ac bibendum magna dapibus. Aliquam cursus nunc sed vulputate condimentum. Mauris at nunc tempus, pretium dolor sed, efficitur odio. Cras dignissim molestie massa, molestie sodales felis porttitor ut. Quisque aliquam scelerisque commodo. Sed nec lacus ligula. Vestibulum vitae dolor augue.

Curabitur porttitor, ante at sagittis ornare, tortor risus volutpat nunc, a iaculis lacus ipsum eu nulla. Fusce eleifend nibh non cursus cursus. Sed luctus auctor quam a varius. Vestibulum facilisis vitae nisl quis mattis. Nunc maximus, leo vel convallis vulputate, quam massa eleifend odio, sit amet luctus nibh magna quis elit. Aenean venenatis pellentesque felis, non vulputate lorem euismod id. Ut quis facilisis mauris. Nam ultricies turpis sollicitudin tortor iaculis, at sagittis enim cursus. Vestibulum placerat massa in risus volutpat, vel sollicitudin justo posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue tempor mi, et efficitur risus porta a. Phasellus nisl leo, varius a pharetra at, maximus ut risus. Nullam lobortis ligula felis. Proin pretium nibh eu erat viverra, ac bibendum magna dapibus. Aliquam cursus nunc sed vulputate condimentum. Mauris at nunc tempus, pretium dolor sed, efficitur odio. Cras dignissim molestie massa, molestie sodales felis porttitor ut. Quisque aliquam scelerisque commodo. Sed nec lacus ligula. Vestibulum vitae dolor augue.
Curabitur porttitor, ante at sagittis ornare, tortor risus volutpat nunc, a iaculis lacus ipsum eu nulla. Fusce eleifend nibh non cursus cursus. Sed luctus auctor quam a varius. Vestibulum facilisis vitae nisl quis mattis. Nunc maximus, leo vel convallis vulputate, quam massa eleifend odio, sit amet luctus nibh magna quis elit. Aenean venenatis pellentesque felis, non vulputate lorem euismod id. Ut quis facilisis mauris. Nam ultricies turpis sollicitudin tortor iaculis, at sagittis enim cursus. Vestibulum placerat massa in risus volutpat, vel sollicitudin justo posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue tempor mi, et efficitur risus porta a. Phasellus nisl leo, varius a pharetra at, maximus ut risus. Nullam lobortis ligula felis. 

</p>
      <Popup modal trigger={<button className="order">Order Now!</button>}>
        <OrderForm/>
        </Popup>
    </div>
  );
};
export default App;
