import React, { useEffect, useState } from 'react';
import './index.css';
import { formatCPF, validateCPF } from '../../components/validators/cpf/index.js';
import { formatPhoneNumber, validatePhoneNumber } from '../../components/validators/telefone/index.js';
import { validateEmail } from '../../components/validators/email/index.js';
import { registerUser } from '../../controllers/register.js';
import { useNavigate, useLocation } from "react-router-dom";

function Register() {
    const location = useLocation();


    const [name, setName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [step, setStep] = useState(false)

    //  Função para mudar de step

    const handleStep = () =>{
        //if (name === '' || cpf === '' || phone === '')  {setError('Complete todos os campos!')}
        if (false)  {}
        else{ 
            setError('')
            setStep(true)
        }
    }

    // Função para lidar com a mudança de email

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

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

    const navigate = useNavigate();

    // Função para lidar com o envio do formulário

    const handleSubmit = async (e) => {
        let cpfValidated = validateCPF(cpf);
        let emailValidated = validateEmail(email);
        let phoneValidated = validatePhoneNumber(phone);

        if (password === confirmPassword && cpfValidated && emailValidated && phoneValidated) {
            e.preventDefault();
            setError('');

            try {
                const userData = { name, email, phone, cpf, password };
                const response = await registerUser(userData);
                if (response.token) {
                    navigate('/home');
                } else {
                    setError('Erro ao registrar usuário. ' + response)
                }
            } catch (error) {
                // Tratar erros da solicitação, se houver
                console.error('Erro ao fazer a solicitação:', error);
                setError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
            }
        }
        else {
            e.preventDefault();
            if (!cpfValidated) {
                setError('CPF inválido!');
            }
            if (!emailValidated) {
                setError('Email inválido!');
            }
            if (password !== confirmPassword) {
                setError('As senhas não são iguais!');
            }
            if (!phoneValidated) {
                setError('Telefone inválido!');
            }
            console.log('Cadastro não realizado, verifique os dados inseridos!');
        }
    }


    useEffect(() => {
        document.title = 'Cadastro';
        if (localStorage.getItem("authenticated")) {
            localStorage.removeItem("authenticated");
        }
        setTimeout(() => {
            setError('');
        }
            , 5000);
    }, [location.state?.msg]);
    return (

        <div className="body">

            {/* Decoracao telas */}
            <img src="./images/green.png" id='green' alt='mancha verde'/>
            <img src="./images/yellow.png" id='yellow' alt='mancha amarela'/>
            <img src="./images/pink.png" id='pink' alt='mancha rosa'/>
            <img src="./images/black.png" id='black' alt='mancha preta'/>
            
            

            <div className="register-container">
                
                <div className="logo">
                    <a href="/">
                        <img src="./images/logo.png" alt="logo" />
                    </a>
                </div>
                

                <form onSubmit={handleSubmit} method='post'>
                    

                    <div className="form-inputs">
                    <h1>Cadastre seu Grupo</h1>
                    <p className="error">{error}</p>

                    {!step ? 
                        <>
                            <div className="input-form">
                            
                            <input
                                required
                                name='name'
                                className="input-field"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Razão Social'
                            />
                            </div>


                            <div className="input-form">
                            
                            <input
                                    required
                                    name='telefone'
                                    className="input-field"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => [setPhone(e.target.value), handlePhoneChange(e)]}
                                    placeholder='Telefone'
                                    maxLength={15}
                                />
                            </div>

                            <div className="input-form">
                            
                            <input
                                required
                                name='cpf'
                                className="input-field"
                                type="text"
                                value={cpf}
                                maxLength={14}
                                onChange={(e) => [setCpf(e.target.value), handleCPFChange(e)]}
                                placeholder='CPF'
                            />
                            </div>

                            <div className="buttons">
                                <button type='button' className="register-button" onClick={handleStep}>Próximo</button>
                            </div>

                        </>
                    
                    
                    : (
                        <>
                        <div className="input-form">
                        <input
                            required
                            name='email'
                            className="input-field"
                            type="email"
                            value={email}
                            onChange={(e) => [setEmail(e.target.value), handleEmailChange(e)]}
                            placeholder='E-mail'
                        />
                        </div>
                        
                        <div className="input-form">
                        <input
                            required
                            name='password'
                            className="input-field"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Senha'
                        />
                        </div>

                        <div className="input-form">
                        <input
                            required
                            name='confirm-password'
                            className="input-field"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder='Confirma senha'
                        />
                        </div>
                        <div className="buttons">
                                <button  className="register-volta" onClick={()=>setStep(false)}>Voltar</button>
                                <button className="register-button" type="submit">Registrar</button>
                        </div>

                        </>
                    )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
