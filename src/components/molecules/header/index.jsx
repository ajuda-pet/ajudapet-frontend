import React from 'react';
import './index.css'; // Importe o arquivo CSS para estilos customizados

const Header = () => {
    return (
        <>
            <div class="header">
                <div class="logo">Logo</div>
                <div class="header-right">
                    <a href="#about">icone Sobre</a>
                    <a href="#config">icone Config</a>
                    <a class="active" href="#home">icone Grupos</a>
                </div>
            </div>


        </>
    );
};

export default Header;
