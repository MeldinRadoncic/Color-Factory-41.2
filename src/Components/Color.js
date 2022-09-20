import React,{useState} from "react";
import {Link} from 'react-router-dom'



const Color = ({id,name , value }) => {

    
    return(

        <Link to={`/colors/${value}`}>{name}</Link>
    )
}


export default Color;