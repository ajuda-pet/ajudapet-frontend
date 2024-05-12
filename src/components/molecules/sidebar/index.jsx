import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Importe os ícones desejados
import './index.css'; // Arquivo de estilos para o menu lateral
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; // Importe os ícones desejados
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const ongPage = (link) => {
        if (link === 'cadastrarVoluntario') navigate('/registrarVoluntario');
        if (link === 'gerenciarEstoque') navigate('/gerenciarEstoque');
        if (link === 'cadastrarOng') navigate('/registrarOng');
    }
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>


            {isOpen ? (
                <>
                    <h1>Menu</h1>

                    <FontAwesomeIcon
                        icon={faTimes}
                        size="2x"
                        onClick={toggleSidebar}
                        style={{ right: '30', top: '20', cursor: 'pointer', position: 'absolute', color: 'rgb(180, 90, 79)' }}
                    />

                    <ul>
                        <li><button onClick={ongPage('cadastrarVoluntario')}>Cadastrar voluntários</button></li>
                        <li><button onClick={ongPage('gerenciarEstoque')}>Gerenciar estoque</button></li>

                        <li><button onClick={ongPage('cadastrarOng')}>Cadastrar ONG's</button></li>
                    </ul>
                </>
            ) : (

                <FontAwesomeIcon
                    icon={faAngleDown}
                    size="3x"
                    onClick={toggleSidebar}
                    style={{ marginLeft: '-30px', marginTop: '9em', cursor: 'pointer', position: 'absolute', color: 'rgb(2, 173, 31)', rotate: '90deg' }}
                />

            )}

        </div>
    );
};

export default Sidebar;
