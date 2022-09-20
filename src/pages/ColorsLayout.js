import {Link,useParams} from 'react-router-dom'
import './ColorLayout.css'



const ColorsLayout =() => {
const {color} = useParams()

    return(
        <>
        <div className='ColorLayout' style={{
            width:'100vw',
            height:'100vh',
            backgroundColor:'#' + color
        }}>

<Link to={'/colors'}>Home</Link>
<Link to={'/colors/new'}>Add Another Color</Link>

</div>
</>
    )
}

export default ColorsLayout