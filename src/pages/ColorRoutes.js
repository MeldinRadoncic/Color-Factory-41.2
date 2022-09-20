import {Route, Routes} from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import ColorForm from '../Components/ColorForm'
import Home from '../pages/Home'
import  ColorsLayout  from './ColorsLayout'

export function ColorRoutes() {

    return(
    <>

        <Routes>
            <Route index element={<Home key={uuid()} />}/>
            <Route path=':color' element={<ColorsLayout key={uuid()}/>}/>
            <Route path='new' element={<ColorForm/>}/>


        </Routes>

        </>
    )
}