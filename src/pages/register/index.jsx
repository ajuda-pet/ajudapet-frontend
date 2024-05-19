import React, { useEffect, useState, useCallback } from 'react';

// import { formatCPF, validateCPF } from '../../components/validators/cpf/index.js';
// import { formatPhoneNumber, validatePhoneNumber } from '../../components/validators/telefone/index.js';
// import { validateEmail } from '../../components/validators/email/index.js';
// import { registerUser } from '../../controllers/register.js';
// import { useNavigate, useLocation } from "react-router-dom";

// import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
// import { storage } from '../../controllers/resgisterImg.js';
// import { gerarNomeImagem } from '../../components/validators/arquivo/index.js';


function Register() {
    // const location = useLocation();


    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [cpf, setCpf] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [error, setError] = useState('');

    // const [step, setStep] = useState(1)

    // const [imageUrl, setImageUrl] = useState(''); //mostrar imagem na tela

    // const [imgUrl, setImgUrl] = useState('') //enviar pro firebase
    // const [file, setFile] = useState('')//file

    // // const [progress, setProgress] = useState([0]) 

    // //  Função para mudar de step
    // const handleStep = () => {
    //     if ((name === '' || cpf === '' || phone === '') && step === 1) { setError('Complete todos os campos!') }
    //     else if (description === '' && step === 3) { setError('Complete todos os campos!') }
    //     else {
    //         setError('')
    //         setStep(step + 1)
    //     }
    // }

    // // Função para quarda imagem
    // const handleUpload = (e) => {
    //     const file = e.target.files[0];
    //     setFile(file)
    //     const fileUrl = URL.createObjectURL(file); // Cria uma URL para o arquivo selecionado
    //     setImageUrl(fileUrl);
    // };

    // //Função feita para submit da imagem pro firebase
    // const fistSubmit = (e) => {
    //     e.preventDefault();

    //     // Caso não envie imagem
    //     if (!file) return (handleSubmit())

    //     // Gerar nome aleatorio pra arquivo
    //     let nomeImg = gerarNomeImagem()
    //     console.log('enviou img')
    //     const storageRef = ref(storage, `images/${nomeImg}`)
    //     const uploadTask = uploadBytesResumable(storageRef, file)
    //     uploadTask.on(
    //         "state_changed",
    //         snapshot => {
    //             //const progrees = (snapshot.bytesTransferred/snapshot.totalBytes)*100 // upload da imagem

    //         },
    //         error => {
    //             setError(error)
    //         },
    //         () => {
    //             getDownloadURL(uploadTask.snapshot.ref).then(url => {
    //                 setImgUrl(url)

    //             })
    //         }
    //     )
    // }

    // // Função focada em remover imagem do firebase em caso de não registrar
    // const deleteImg = useCallback(() => {

    //     if (!imgUrl) return;
    //     console.log('deletei')
    //     try {
    //         const imageRef = ref(storage, imgUrl);

    //         deleteObject(imageRef);
    //         setImgUrl('')

    //     } catch (error) {
    //         console.error('Erro ao deletar a imagem:', error);
    //     }
    // }, [imgUrl])

    // // Função para mudar texto

    // const handleText = (e) => {
    //     if (e.target.value.length < 255) setDescription(e.target.value)

    // }
    // // Função para lidar com a mudança de email

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }

    // // Função para lidar com a mudança do número de telefone
    // const handlePhoneChange = (e) => {
    //     const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    //     setPhone(formattedPhoneNumber);
    // }
    // // Função para lidar com a mudança do CPF

    // const handleCPFChange = (e) => {
    //     const formattedCPF = formatCPF(e.target.value);
    //     setCpf(formattedCPF);
    // }

    // const navigate = useNavigate();



    // // Função para lidar com o envio do formulário

    // const handleSubmit = useCallback(async () => {
    //     let cpfValidated = validateCPF(cpf);
    //     let emailValidated = validateEmail(email);
    //     let phoneValidated = validatePhoneNumber(phone);


    //     if (password === confirmPassword && cpfValidated && emailValidated && phoneValidated) {

    //         setError('');

    //         try {

    //             const userData = { name, description, email, phone, cpf, password };
    //             const response = await registerUser(userData);
    //             if (response.token) {
    //                 navigate('/');
    //             } else {
    //                 setError('Erro ao registrar usuário. ' + response)
    //             }
    //         } catch (error) {
    //             // Tratar erros da solicitação, se houver

    //             console.error('Erro ao fazer a solicitação:', error);
    //             setError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    //             deleteImg()
    //         }
    //     }
    //     else {
    //         if (!cpfValidated) {
    //             setError('CPF inválido!');
    //         }
    //         if (!emailValidated) {
    //             setError('Email inválido!');
    //         }
    //         if (password !== confirmPassword) {
    //             setError('As senhas não são iguais!');
    //         }
    //         if (!phoneValidated) {
    //             setError('Telefone inválido!');
    //         }
    //         deleteImg()
    //         console.log('Cadastro não realizado, verifique os dados inseridos!');
    //     }
    // }, [name, description, email, phone, cpf, password, confirmPassword, deleteImg, navigate]
    // )

    // useEffect(() => {
    //     console.log('tentou enviar database')
    //     if (imgUrl === '') return;
    //     handleSubmit()
    // },
    //     [imgUrl, handleSubmit])

    // useEffect(() => {
    //     document.title = 'Cadastro';
    //     if (localStorage.getItem("authenticated")) {
    //         localStorage.removeItem("authenticated");
    //     }
    //     setTimeout(() => {
    //         setError('');
    //     }
    //         , 5000);
    // }, [location.state?.msg]);

    return (

        <div className="body">

        </div>
    );
}

export default Register;
