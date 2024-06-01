

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Troque 'Switch' por 'Routes'
import Login from './pages/login/index.jsx';
import Register from './pages/register/index.jsx';
import Map from './pages/map/index.jsx';
import Home from './pages/home/index.jsx';
import RegistrarOng from './pages/registrarOng/index.jsx';
import RegistrarVoluntario from './pages/registrarVoluntario/index.jsx';
import GerenciarEstoque from './pages/gerenciarEstoque/index.jsx';
import NotFoundPage from './pages/notFoundPage/index.jsx';
import AddPet from './pages/addPet/index.jsx';
import AddAdoptPoint from './pages/addAdoptPoint/index.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    useEffect(() => {
        if (window.location.pathname == '/') {
            window.location.href = 'pets'
        }
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/pets" element={<AddPet />} />
                <Route path="/pontos" element={<AddAdoptPoint />} />
                <Route path="/grupos" element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;