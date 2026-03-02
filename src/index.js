import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './pages/Navbar';
import Searching from './pages/Search';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Navbar/>} />
      <Route path="/searching" element={<Searching/>} />
    </Routes>
    </BrowserRouter>
  </>
);

