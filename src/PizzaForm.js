import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';


const OrderForm = () => {

const [formState, setFormState] = useState({
    name: "",
    size: "",
    pepperoni: "",
    sausage: "",
    canadian: "",
    spicy: "",
    garlic: "",
    onions: "",
    green: "",
    diced: "",
    black: "",
    roasted: "",
    artichoke: "",
    cheese: "",
    pineapple: "",
    extra: "",

    sub: "",

});
const formSchema = yup.object().shape({
    name: yup.string().required("Must input a name"),
    size: yup.string().required("Please choose a size for your pizza"),
    sauce: yup.string().required("Please choose a sauce for your pizza"),
    pepperoni: yup.string(),
    sausage: yup.string(),
    canadian: yup.string(),
    spicy: yup.string(),
    garlic: yup.string(),
    onions: yup.string(),
    green: yup.string(),
    diced: yup.string(),
    black: yup.string(),
    roasted: yup.string(),
    artichoke: yup.string(),
    cheese: yup.string(),
    pineapple: yup.string(),
    extra: yup.string(),
    sub: yup.string()
});
const [errors, setErrors] = useState({
    name: "",
    size: "",
    sauce: "",
    pepperoni: "",
    sausage: "",
    canadian: "",
    spicy: "",
    garlic: "",
    onions: "",
    green: "",
    diced: "",
    black: "",
    roasted: "",
    artichoke: "",
    cheese: "",
    pineapple: "",
    extra: "",
    sub: "",
});
useEffect(() => {
    formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid)
    })
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
    axios.post("https://reqres.in/api/users", formState)
    .then(response => {
        setPost(response.data);
        setFormState({
            name: "",
            size: "",
            sauce: "",
            pepperoni: "",
            sausage: "",
            canadian: "",
            spicy: "",
            garlic: "",
            onions: "",
            green: "",
            diced: "",
            black: "",
            roasted: "",
            artichoke: "",
            cheese: "",
            pineapple: "",
            extra: "",
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
            <label htmlFor="name">
                Name:
                <input
                id="name"
                name="name"
                value={formState.name}
                onChange={inputChange}
                />
                {errors.name.length > 0 ? <p className="error">{errors.name}</p>:null}
            </label>
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
    
    
        <label><input type="checkbox" name="pepperoni" value={formState.pepperoni} onChange={inputChange} /> Pepperoni</label>
        <label><input type="checkbox" name="sausage" value={formState.sausage} onChange={inputChange} /> Sausage</label>
        <label><input type="checkbox" name="canadian" value={formState.canadian} onChange={inputChange}/> Canadian Bacon</label>
        <label><input type="checkbox" name="spicy" value={formState.spicy} onChange={inputChange}/> Spicy Italian Sausage</label>
        <label><input type="checkbox" name="garlic" value={formState.garlic} onChange={inputChange}/> Garlic Chicken</label>
        <label><input type="checkbox" name="onions" value={formState.onions} onChange={inputChange}/> Onions</label>
        <label><input type="checkbox" name="green" value={formState.green} onChange={inputChange} />Green Pepper</label>
        <label><input type="checkbox" name="diced" value={formState.diced} onChange={inputChange}/>Diced Tomatos</label>
        <label><input type="checkbox" name="black" value={formState.black} onChange={inputChange}/> Black Olives</label>
        <label><input type="checkbox" name="roasted" value={formState.roasted} onChange={inputChange}/> Roasted Garlic</label>
        <label><input type="checkbox" name="artichoke" value={formState.artichoke} onChange={inputChange}/>Artichoke Hearts</label>
        <label><input type="checkbox" name="three" value={formState.three} onChange={inputChange}/>Three Cheese</label>
        <label><input type="checkbox" name="pineapple" value={formState.pineapple} onChange={inputChange}/>Pineapple</label>
        <label><input type="checkbox" name="extra" value={formState.extra} onChange={inputChange}/>Extra Cheese</label>
    
    
    </fieldset>
    <fieldset >
        <legend>Choice of Substitute</legend>
        <p>Choose up to 1</p>
        <label><input type="checkbox" name="sub" value={formState.sub} onChange={inputChange}/>Gluten Free Crust (+$1.00)</label>
    </fieldset>
        <button type="submit" >Place Order</button>
        <pre>{JSON.stringify(post,null, 2)}</pre>
        </form>

    )
}

export default OrderForm;