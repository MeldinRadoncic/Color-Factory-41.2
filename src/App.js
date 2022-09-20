import './App.css';
import {Routes, Route} from 'react-router-dom'

import {ColorRoutes } from './pages/ColorRoutes'
import  NotFound from './pages/NotFound'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/colors/*' element={<ColorRoutes/>}>
        </Route>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;
