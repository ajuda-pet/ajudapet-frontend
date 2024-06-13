

import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/index.jsx'
import NotFoundPage from './pages/notFoundPage/index.jsx'
import AddPet from './pages/addPet/index.jsx'
import AddAdoptPoint from './pages/addAdoptPoint/index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
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

export default App