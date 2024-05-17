import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const SideBarHome = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/addPet')
    }
    return (
        <>
            <div class="sidebar">
                <a href="/"><div className='circle home'></div>logo</a>
                <button onClick={handleClick}><div className='circle'></div><p>Adicionar Pet</p></button>
                <a href="/"><div className='circle'></div>Services</a>
                <a href="/"><div className='circle'></div>Contact</a>
            </div>

        </>
    )
}

export default SideBarHome;