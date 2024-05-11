import React, { useState } from 'react';
import './index.css';
import { formatCPF, validateCPF } from '../../components/validators/cpf/index.js';
import { formatPhoneNumber } from '../../components/validators/telefone/index.js';

function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');




    // Função para lidar com a mudança do número de telefone
    const handlePhoneChange = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhone(formattedPhoneNumber);
    }
    // Função para lidar com a mudança do CPF

    const handleCPFChange = (e) => {
        const formattedCPF = formatCPF(e.target.value);
        setCpf(formattedCPF);
    }


    // Função para lidar com o envio do formulário

    const handleSubmit = (e) => {
        console.log('Dados do formulário:', { fullName, email, phone, cpf, password });

        e.preventDefault();
        if (validateCPF(cpf)) {
            console.log('CPF válido:', cpf);
        } else {
            console.log('CPF inválido:', cpf);
        }
    }

    return (
        <div className="body">

            <div className="backgroundImage"></div>
            <div className="backgroundDogs"></div>

            <div className="register-container">
                <h1>Cadastro</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <label for='fullName'>
                            Nome Completo:
                        </label>

                        <input
                            name='fullName'
                            className="input-field"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder='João da Silva'
                        />
                        <label for='email'>
                            Email:
                        </label>

                        <input
                            name='email'
                            className="input-field"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='example@gmail.com'
                        />
                        <label for='telefone'>
                            Telefone:
                            <input
                                name='telefone'
                                className="input-field"
                                type="tel"
                                value={phone}
                                onChange={(e) => [setPhone(e.target.value), handlePhoneChange(e)]}
                                placeholder='(53)99999-9999'
                                maxLength={15}

                            />
                        </label>
                        <label for='cpf'>
                            CPF:
                        </label>

                        <input
                            name='cpf'
                            className="input-field"
                            type="text"
                            value={cpf}
                            maxLength={14}
                            onChange={(e) => [setCpf(e.target.value), handleCPFChange(e)]}
                            placeholder='000.000.000-00'
                        />
                        <label for='password'>
                            Senha:
                        </label>

                        <input
                            name='password'
                            className="input-field"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='********'
                        />
                        <button className="register-button" type="submit">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
