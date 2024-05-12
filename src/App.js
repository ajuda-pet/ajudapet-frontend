

import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'; // Troque 'Switch' por 'Routes'
import Login from './pages/login/index.jsx';
import Register from './pages/register/index.jsx';
import Home from './pages/home/index.jsx';
import RegistrarOng from './pages/registrarOng/index.jsx';
import RegistrarVoluntario from './pages/registrarVoluntario/index.jsx';
import GerenciarEstoque from './pages/gerenciarEstoque/index.jsx';
function App() {
     const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    // React.useEffect(() => {
    //     let jwtToken = localStorage.getItem("validationToken");
    //     if (jwtToken) {
    //         setIsAuthenticated(true);
    //     }
    // }, []);
    
    return (
        <Router>           

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register" element={<Register />} />
                <Route path="/registrarOng" element={isAuthenticated ? <RegistrarOng /> : <Navigate to="/" />} />
                <Route path="/registrarVoluntario" element={isAuthenticated ? <RegistrarVoluntario /> : <Navigate to="/" />} />
                <Route path="/gerenciarEstoque" element={isAuthenticated ? <GerenciarEstoque /> : <Navigate to="/" />} />
                <Route path="*" element={ <Navigate to="/" />} />

            </Routes>
        </Router>
    );
}

export default App;