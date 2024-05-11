

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Troque 'Switch' por 'Routes'
import Login from './pages/login/index.jsx';
import Register from './pages/register/index.jsx';
import Home from './pages/home/index.jsx';


function App() {
    return (
        <Router>
            <Routes> 
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />

            </Routes>
        </Router>
    );
}

export default App;