import React from 'react';
import './index.css'; // Importe o arquivo CSS para estilos customizados

const Header = () => {
    return (
        <>
            <div class="header">
                <div href="#default" class="logo"></div>
                <div class="header-right">
                    <a href="#about">icone Sobre</a>
                    <a href="#about">icone config</a>
                    <a class="active" href="#home">icone Grupos</a>

                </div>
            </div>


        </>
    );
};

export default Header;
