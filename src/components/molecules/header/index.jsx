import React from 'react';
import './index.css'; // Importe o arquivo CSS para estilos customizados

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">Logo</div>
                <div className="header-right">
                    <a href="#about">icone Sobre</a>
                    <a href="#config">icone Config</a>
                    <a className="active" href="#home">icone Grupos</a>
                </div>
            </div>


        </>
    );
};

export default Header;
