import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';


const OrderForm = () => {

const [formState, setFormState] = useState({
    size: "",
    sauce: "",
    toppings: [], 
    sub: "",

});
const formSchema = yup.object().shape({
    size: yup.string().required("Please choose a size for your pizza"),
    sauce: yup.string().required("Please choose a sauce for your pizza"),
    toppings: yup.string().required("Add toppings to your pizza"),
    sub: yup.string()
});
const [errors, setErrors] = useState({
    size: "",
    sauce: "",
    toppings: [], 
    sub: "",
});
useEffect(() => {
    formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
    });
}, [formState]);





    return(
        <form>
            <fieldset>
            <legend>Choice of Size</legend>
                
                <p>Please choose your desired size of pizza.</p> <br/>

                <select id="size" name="size">
                    <option value="personal">Personal</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extra">Extra Large</option>
                    <option value="party">Party</option>
                </select>
            
            </fieldset>
            <fieldset>
            <legend>Choice of Sauce</legend>
                 
                <p>Please choose from the list of sauces below</p><br/>

                <input type="radio" id="original" name="sauce" value="original"/>
                <label htmlFor="original">Original Marinara</label>
                <input type="radio" id="garlic" name="sauce" value="garlic"/>
                <label htmlFor="garlic">Garlic Ranch</label>
                <input type="radio" id="bbq" name="sauce" value="bbq"/>
                <label htmlFor="bbq">BBQ Sauce</label>
                <input type="radio" id="spinach" name="sauce" value="spinach"/>
                <label htmlFor="spinach">Spinach Alfredo</label>
            
            </fieldset>
            <fieldset>
        <legend>Add Your Toppings</legend>
    
    <p>Check the types of topppings that you would like on your pizza</p>
    
    <p>
        <label><input type="checkbox" name="toppings[]" value="pepperoni" /> Pepperoni</label>
        <label><input type="checkbox" name="toppings[]" value="sausage" /> Sausage</label>
        <label><input type="checkbox" name="toppings[]" value="canadian bacon" /> Canadian Bacon</label>
        <label><input type="checkbox" name="toppings[]" value="spicy italian sausage" /> Spicy Italian Sausage</label>
        <label><input type="checkbox" name="toppings[]" value="garlic chicken" /> Garlic Chicken</label>
        <label><input type="checkbox" name="toppings[]" value="onions" /> Onions</label>
        <label><input type="checkbox" name="toppings[]" value="green pepper" />Green Pepper</label>
        <label><input type="checkbox" name="toppings[]" value="diced tomatos" />Diced Tomados</label>
        <label><input type="checkbox" name="toppings[]" value="balck olives" /> Black Olives</label>
        <label><input type="checkbox" name="toppings[]" value="roasted garlic" /> Roasted Garlic</label>
        <label><input type="checkbox" name="toppings[]" value="artichoke hearts" />Artichoke Hearts</label>
        <label><input type="checkbox" name="toppings[]" value="three cheese" />Three Cheese</label>
        <label><input type="checkbox" name="toppings[]" value="pineapple" />Pineapple</label>
        <label><input type="checkbox" name="toppings[]" value="extra cheese" />Extra Cheese</label>
    </p>
    
    </fieldset>
    <fieldset>
        <legend>Choice of Substitute</legend>
        <p>Choose up to 1</p>
        <label><input type="checkbox" name="sub" value="gluten free" />Gluten Free Crust (+$1.00)</label>
    </fieldset>

        </form>

    )
}

export default OrderForm;