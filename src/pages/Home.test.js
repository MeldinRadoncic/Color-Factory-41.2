import React from "react";
import Home from '../pages/Home'
import {render,fireEvent,screen, getByPlaceholderText} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import ColorForm from "../Components/ColorForm";


test('Render Home without crashing', () => {
    render(<MemoryRouter><Home/></MemoryRouter> )
})


test('/colors', () => {
    const history = <MemoryRouter initialEntries={['/colors']}>
    <Home/>
</MemoryRouter>
    render((
         <MemoryRouter initialEntries={['/colors']}>
            <Home/>
        </MemoryRouter>
    ))
    expect(screen.getByText('Welcome to the color factory')).toBeInTheDocument()
    const btn = screen.getByText('Add a Color')
    fireEvent.click(btn)

    render((
        <MemoryRouter initialEntries={['/colors/new']}>
           <ColorForm/>
       </MemoryRouter>
   ))
expect(screen.getByLabelText("Color Name")).toBeInTheDocument();

const formBtn = screen.getByText('Add Color')
fireEvent.click(formBtn)
render((
    <MemoryRouter initialEntries={['/colors/new']}>
       <Home/>
   </MemoryRouter>
))
const link = 'red'
expect(link).toBe('red')





})