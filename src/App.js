import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';


function App() {
  return (
    <>
      <div className="main">
        <h1>CRUD Operation</h1><br />
        <BrowserRouter>
          <Routes>
            <Route path='/create' element={<Create />} />
            <Route path='/Read' element={<Read />} />
            <Route path='/Update' element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
