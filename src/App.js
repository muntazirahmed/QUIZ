import React from 'react';
import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Navbar from './pages/Navbar'


import Register from './pages/Register';


function App() {
  return <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/"element={<Register/>}/>
     
  </Routes>
 
  </BrowserRouter>
  
 
  </div>
  
}

export default App;
