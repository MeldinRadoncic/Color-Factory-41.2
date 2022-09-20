import {Link,useLocation} from 'react-router-dom'
import React,{useState} from 'react'
import Color from '../Components/Color'
import {v4 as uuid} from 'uuid'
import '../Home.css'





const Home =() => {
    const location = useLocation();
    const [colors,setColors] = useState([
        {id:1,color:"red" , value:"D2001A"},
        {id:2,color:"blue" , value:"87A2FB"},
        {id:3,color:"green" , value:"367E18"}
    ])
    
    

    return (
        <>
        
        <div className='Home'>
        <h1>Welcome to the color factory</h1>
        <Link className='Home_addColor_btn' to={'/colors/new'}>Add a Color</Link>

    </div>
<div className='Home_color_box'>

 {colors.map(({id,color,value}) => 


    <Color id={id}
     name={color}
        value={value}
      key={uuid()}/>
    )}

<div className='Home_individual_color'>
    
{location.state !== null ?

    <Color id={location.key}
     name={location.state.colorName}
      value={location.state.colorValue.slice(1)}
      key={location.key}/>
: "" }



</div>


    

</div>
   
        
        
        </>
    )
}

export default Home