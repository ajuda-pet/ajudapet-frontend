import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Importe os ícones desejados
import './index.css'; // Arquivo de estilos para o menu lateral
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'; // Importe os ícones desejados

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

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
                        <li><button >Cadastrar voluntários</button></li>
                        <li><button >Gerenciar estoque</button></li>

                        <li><button>Cadastrar ONG's</button></li>
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
