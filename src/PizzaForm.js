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
    
}, [formState]);

const [buttonDisabled, setButtonDisabled] = useState(true);
const [post, setPost] = useState([]);

const validateChange = e => {
    yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrors({
                ...errors, 
                [e.target.name]: ""
            });
        })
        .catch(error => {
            setErrors({
                ...errors, 
                [e.target.name]: error.errors
            });
        });
};
const formSubmit = e => {
    e.preventDefault();
    axios.post("", formState)
    .then(response => {
        setPost(response.data);
        setFormState({
            size: "",
            sauce: "",
            toppings: [], 
            sub: "",
        })

    })
    .catch(error => {
        console.log(error.response)
    });
};
const inputChange = e => {
    e.persist();
    const newFormData = {
        ...formState,
        [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value

    };
    validateChange(e);
    setFormState(newFormData);
}



    return(
        <form onSubmit={formSubmit}>
            <fieldset>
            <legend>Choice of Size</legend>
                
                <p>Please choose your desired size of pizza.</p> <br/>

                <select id="size" name="size" onChange={inputChange}>
                    <option value="personal">Personal</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extra">Extra Large</option>
                    <option value="party">Party</option>
                </select>
            
            </fieldset>
            <fieldset >
            <legend>Choice of Sauce</legend>
                 
                <p>Please choose from the list of sauces below</p>

                <input type="radio" id="original" name="sauce" value="original" onChange={inputChange}/>
                <label htmlFor="original">Original Marinara</label>
                <input type="radio" id="garlic" name="sauce" value="garlic" onChange={inputChange}/>
                <label htmlFor="garlic">Garlic Ranch</label>
                <input type="radio" id="bbq" name="sauce" value="bbq" onChange={inputChange}/>
                <label htmlFor="bbq">BBQ Sauce</label>
                <input type="radio" id="spinach" name="sauce" value="spinach" onChange={inputChange}/>
                <label htmlFor="spinach">Spinach Alfredo</label>
            
            </fieldset>
            <fieldset >
        <legend>Add Your Toppings</legend>
    
    <p>Check the types of topppings that you would like on your pizza</p>
    
    <p>
        <label><input type="checkbox" name="toppings[]" value="pepperoni" onChange={inputChange} /> Pepperoni</label>
        <label><input type="checkbox" name="toppings[]" value="sausage"onChange={inputChange} /> Sausage</label>
        <label><input type="checkbox" name="toppings[]" value="canadian bacon" onChange={inputChange}/> Canadian Bacon</label>
        <label><input type="checkbox" name="toppings[]" value="spicy italian sausage" onChange={inputChange}/> Spicy Italian Sausage</label>
        <label><input type="checkbox" name="toppings[]" value="garlic chicken" onChange={inputChange}/> Garlic Chicken</label>
        <label><input type="checkbox" name="toppings[]" value="onions" onChange={inputChange}/> Onions</label>
        <label><input type="checkbox" name="toppings[]" value="green pepper"onChange={inputChange} />Green Pepper</label>
        <label><input type="checkbox" name="toppings[]" value="diced tomatos" onChange={inputChange}/>Diced Tomados</label>
        <label><input type="checkbox" name="toppings[]" value="balck olives" onChange={inputChange}/> Black Olives</label>
        <label><input type="checkbox" name="toppings[]" value="roasted garlic" onChange={inputChange}/> Roasted Garlic</label>
        <label><input type="checkbox" name="toppings[]" value="artichoke hearts" onChange={inputChange}/>Artichoke Hearts</label>
        <label><input type="checkbox" name="toppings[]" value="three cheese" onChange={inputChange}/>Three Cheese</label>
        <label><input type="checkbox" name="toppings[]" value="pineapple" onChange={inputChange}/>Pineapple</label>
        <label><input type="checkbox" name="toppings[]" value="extra cheese" onChange={inputChange}/>Extra Cheese</label>
    </p>
    
    </fieldset>
    <fieldset onChange={inputChange}>
        <legend>Choice of Substitute</legend>
        <p>Choose up to 1</p>
        <label><input type="checkbox" name="sub" value="gluten free" onChange={inputChange}/>Gluten Free Crust (+$1.00)</label>
    </fieldset>
        <button  >Place Order</button>
        <pre>{JSON.stringify(post,null, 2)}</pre>
        </form>

    )
}

export default OrderForm;