import React, { useEffect, useState, useCallback } from 'react';
import './index.css';
import { formatCPF, validateCPF } from '../../components/validators/cpf/index.js';
import { formatPhoneNumber, validatePhoneNumber } from '../../components/validators/telefone/index.js';
import { validateEmail } from '../../components/validators/email/index.js';
import { registerUser } from '../../controllers/register.js';
import { useNavigate, useLocation } from "react-router-dom";

import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../../controllers/resgisterImg.js';
import { gerarNomeImagem } from '../../components/validators/arquivo/index.js';


function Register() {
    const location = useLocation();


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const [step, setStep] = useState(1) 

    const [imageUrl, setImageUrl] = useState(''); //mostrar imagem na tela

    const [imgUrl, setImgUrl] = useState('') //enviar pro firebase
    const [file, setFile] = useState('')//file

    // const [progress, setProgress] = useState([0]) 

    //  Função para mudar de step
    const handleStep = () =>{
        if ((name === '' || cpf === '' || phone === '') && step === 1)  {setError('Complete todos os campos!')}
        else if (description === '' && step === 3) {setError('Complete todos os campos!')}
        else{ 
            setError('')
            setStep(step+1)
        }
    }

    // Função para quarda imagem
    const handleUpload = (e) => {
        const file = e.target.files[0];
        setFile(file)
        const fileUrl = URL.createObjectURL(file); // Cria uma URL para o arquivo selecionado
        setImageUrl(fileUrl); 
    };

    //Função feita para submit da imagem pro firebase
    const fistSubmit = (e) =>{
        e.preventDefault();

        // Caso não envie imagem
        if (!file) return (handleSubmit())

        // Gerar nome aleatorio pra arquivo
        let nomeImg = gerarNomeImagem() 
        console.log('enviou img')
        const storageRef = ref(storage, `images/${nomeImg}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on(
            "state_changed",
            snapshot => {
                //const progrees = (snapshot.bytesTransferred/snapshot.totalBytes)*100 // upload da imagem
                
            },
            error => {
                setError(error)
            },
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setImgUrl(url)
                    
                })
            }
        )
    }

    // Função focada em remover imagem do firebase em caso de não registrar
    const deleteImg = useCallback(() => {

        if (!imgUrl) return;
        console.log('deletei')
        try {
          const imageRef = ref(storage, imgUrl);
      
          deleteObject(imageRef);
          setImgUrl('')
      
        } catch (error) {
          console.error('Erro ao deletar a imagem:', error);
        }
      },[imgUrl])
 
    // Função para mudar texto

    const handleText = (e) =>{
        if(e.target.value.length < 255) setDescription(e.target.value)
        
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
    
    const handleSubmit = useCallback(async () => {
        let cpfValidated = validateCPF(cpf);
        let emailValidated = validateEmail(email);
        let phoneValidated = validatePhoneNumber(phone);


        if (password === confirmPassword && cpfValidated && emailValidated && phoneValidated) {
            
            setError('');
            
            try {

                const userData = { name, description, email, phone, cpf, password };
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
                deleteImg()
            }
        }
        else {
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
            deleteImg()
            console.log('Cadastro não realizado, verifique os dados inseridos!');
        }
    }, [name, description, email, phone, cpf, password, confirmPassword, deleteImg, navigate ]
)

useEffect(()=>{
    console.log('tentou enviar database')
    if (imgUrl === '') return;
    handleSubmit()
}, 
[imgUrl, handleSubmit])

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
                

                <form onSubmit={fistSubmit} method='post'>
                    

                    <div className="form-inputs">
                        <div className="header-register">
                            <h1>Cadastre seu Grupo</h1>
                            <p className="error">{error}</p>
                        </div>
                    {step === 1 ? 
                    <>
                        <div className='main-register'>
                            <div className="input-form">
                            
                            <input
                                required
                                name='nome'
                                className="input-field"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Nome'
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
                                placeholder='CPF/CNPJ'
                            />
                            </div>
                            </div>
                            <div className="buttons">
                                
                                <button type='button' className="register-button" onClick={handleStep}>Próximo</button>
                            </div>
                            </>
                    
                    : <></>}
                    
                    {step === 2 ? 
                        <>
                        <div className='main-register'>
                            <div className="input-form">
                            <label name="imagem" className="custom-file-button"><span>Escolher imagem</span></label>
                            <p className='p-info'>OBS:imagem do grupo ajuda a ter mais credibilidade!</p>
                            <input 
                                name="imagem" 
                                id="img-register" 
                                type='file'
                                content='aaaa'
                                onChange={(e) => {handleUpload(e)}}
                            />  
                            </div>
                            {imageUrl && <img className='imagem-register' src={imageUrl} alt='img' />}
                        </div>

                        <div className="buttons">
                            <button  className="register-volta" onClick={()=>setStep(step-1)}>Voltar</button>
                            <button type='button' className="register-button" onClick={handleStep}>Próximo</button>

                            
                        </div>
                        </>
                        : <></>}

                    {step === 3 ? 
                    <>
                        
                        <div className='main-register'>
                            <div className="input-form">
                            <textarea 
                                name="description" 
                                id="text-description" 
                                value={description} 
                                placeholder='Razão Social'
                                onChange={(e)=>{handleText(e)}}></textarea>
                            </div>
                        </div>

                        <div className="buttons">
                            <button  className="register-volta" onClick={()=>setStep(step-1)}>Voltar</button>
                            <button type='button' className="register-button" onClick={handleStep}>Próximo</button>
                        </div>
                    </> :  <></>}

                    {step === 4 ? 
                     <>
                    <div className='main-register'>
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
                     </div>
                     <div className="buttons">
                             <button  className="register-volta" onClick={()=>setStep(step-1)}>Voltar</button>
                             <button className="register-button" type="submit">Registrar</button>
                     </div>

                     </>:  <></>}
                   

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
