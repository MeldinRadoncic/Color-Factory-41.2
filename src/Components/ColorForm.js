
import React,{useState} from "react";
import {createPath, useNavigate} from 'react-router-dom'

const INITIAL_COLORS = {
    colorName:"black",
    colorValue:"#000"
}


const ColorForm = () => {
    const [formData,setFormData] = useState(INITIAL_COLORS)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
          ...data,
          [name]: value
        }))}
    
        const handleSubmit = (e) => {
          e.preventDefault();
          const {colorName,colorValue} = formData
          navigate('/colors', {state:{colorName,colorValue}})
        }

       
        

    return(
        <div>
            <h1>Add The Color</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="colorName">Color Name</label>
                <input id="colorName" name="colorName" type='text' placeholder="Color name..." value={formData.colorName} onChange={handleChange}/>

                <label htmlFor="value">Color Value</label>
                <input id="value" name="colorValue" type='color' value={formData.colorValue} onChange={handleChange}/>

                <button>Add Color</button>
            </form>

        </div>
    )
}

export default ColorForm;