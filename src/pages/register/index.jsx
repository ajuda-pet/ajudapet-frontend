import React, { useState } from 'react';
import './index.css'; // Importe o arquivo de estilos

function Register() {
    // Definindo estados para os campos do formulário
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode enviar os dados para a API ou fazer o que for necessário com eles
        console.log('Dados do formulário:', { fullName, email, phone, cpf, password });
    }

    return (
        <div className="body">
         
            <div className="backgroundImage"></div>

        <div className="register-container">
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-inputs">
                <label>
                    Nome Completo:
                    <input
                        className="input-field"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        className="input-field"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Telefone:
                    <input
                        className="input-field"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <label>
                    CPF:
                    <input
                        className="input-field"
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                    />
                </label>
                <label>
                    Senha:
                    <input
                        className="input-field"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button className="register-button" type="submit">Registrar</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Register;
