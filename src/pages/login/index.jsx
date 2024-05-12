import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../components/validators/email';
import { loginUser } from '../../controllers/login';
import './index.css';




function Login() {
  localStorage.removeItem("authenticated");
  const navigate = useNavigate();
  const location = useLocation();

  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com o envio do formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMsg('');
    validateEmail(email);
    if (validateEmail && password.length > 0) {
      const userData = { email, password };
      const token = await loginUser(userData);
      console.log(token)
      if (token) {
        navigate('/home')
      } else {
        setError('Erro ao autenticar usuário. Verifique suas credenciais.');
      }
    }
    else {
      setError('Email inválido!');
    }
  }
  useEffect(() => {
    document.title = 'Login';

    if (location.state?.msg) {
      setMsg(location.state?.msg);
    }

    setTimeout(() => {
      setMsg('');
      setError('');
    }, 5000);

  }, [location.state?.msg]);



  return (


    <div className="Login">
      <h1>Login</h1>
      {/* Mensagens de erro de autenticação */}
      <p className="error">{error}</p>
      <p className="error">{msg}</p>

      <form onSubmit={handleSubmit} method='post'>
        <div className="form-inputs">
          <label for='email'>
            Email:
          </label>

          <input
            required
            name='email'
            className="input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
          <label for='password'>
            Senha:
          </label>

          <input
            required
            name='password'
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type='submit' className="submit-button">Entrar</button>
        </div>

      </form>
      <button onClick={() => navigate('/register')} className="register-b">Registrar</button>
    </div>

  );
}

export default Login;
