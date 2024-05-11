

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Troque 'Switch' por 'Routes'
import Login from './pages/login/index.jsx';
import Register from './pages/register/index.jsx';
import Homer from './pages/homer/index.jsx';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/homer" element={<Homer />} />

            </Routes>
        </Router>
    );
}

export default App;