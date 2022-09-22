import React from "react";
import {render,fireEvent,screen, getByPlaceholderText} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import ColorsLayout from "./pages/ColorsLayout";


test('Render Home without crashing', () => {
    render(<MemoryRouter><ColorsLayout/></MemoryRouter> )
})