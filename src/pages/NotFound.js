import React from "react";
import {Link} from 'react-router-dom'
import '../NotFound.css'

const NotFound =() => {
    
    return(
        <div className='NotFound'>
        <h1>Not Found</h1>
        <Link to={'/colors'}>Back to Colors</Link>
    </div>
    )
}


export default NotFound;