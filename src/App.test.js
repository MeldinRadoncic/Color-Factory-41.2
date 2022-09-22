import { render, screen } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom'
import Home from './pages/Home'


test('Renders Home', () => {
  render((
      <MemoryRouter initialEntries={['/colors']}>
          <Home/>
      </MemoryRouter>
  ))
  expect(screen.getByText('Welcome to the color factory')).toBeInTheDocument()
})