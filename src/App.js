

import React from 'react';
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


function App() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    //buscar a validação pela api e autorizar o acesso
    // React.useEffect(() => {
    //     let jwtToken = localStorage.getItem("validationToken");
    //     if (jwtToken) {
    //         setIsAuthenticated(true);
    //     }
    // }, []);

    return (
        <Router>

            <Routes>
                <Route path="/registrarVoluntario" element={isAuthenticated ? <RegistrarVoluntario /> : <Navigate to="/" />} />
                <Route path="/gerenciarEstoque" element={isAuthenticated ? <GerenciarEstoque /> : <Navigate to="/" />} />
                <Route path="/registrarOng" element={isAuthenticated ? <RegistrarOng /> : <Navigate to="/" />} />
                <Route path="/register" element={<Register />} />
                <Route path="/addPet" element={<AddPet />} />
                <Route path="/login" element={<Login />} />
                <Route path="/map" element={<Map />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </Router>
    );
}

export default App;