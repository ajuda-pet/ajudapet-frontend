import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { validateEmail } from '../../components/validators/email';
// import { loginUser } from '../../controllers/login';




function Login() {
  
  // eslint-disable-next-line no-lone-blocks
  {/*
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

      if (token) {
        localStorage.setItem('valid', true);

        navigate('/')
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


  */}

  return (
    <div className="Login">
    </div>
  );
}

export default Login;
