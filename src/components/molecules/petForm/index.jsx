import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import pointsController from '../../../controllers/points.contorller.js';
import petController from '../../../controllers/pet.controller.js';
import './form.css'; // Importação do arquivo CSS


const SelectPointAdoption = ({ register, errors, setSelectedPoint }) => {
    const [points, setPoints] = useState([]);

    useEffect(() => {
        const groupId = localStorage.getItem('groupId');
        pointsController.getByGroup(groupId).then((response) => {
            if (response.info.adoptionPoints && response.info.adoptionPoints.length > 0) {
                setPoints(response.info.adoptionPoints)
            }
        });

    }, []);



    return (
        <div className="form-group">
            <label htmlFor="select">Ponto de Adoção</label>
            <select id="adoptionPointId" {...register('adoptionPointId', { required: 'Este campo é obrigatório' })} onChange={(e) => setSelectedPoint(e.target.value)}>
                <option value="">Selecione o Ponto de Adoção</option>
                {points && points.map((point) => (
                    <option key={point.id} value={point.id}>{point.name}</option>
                ))}
            </select>
        </div>
    );
};


const Step1 = ({ register, errors }) => (

    <div>

        <div className="form-group">
            <label htmlFor="species">Espécie</label>
            <select id="species" {...register('species', { required: 'Este campo é obrigatório' })}>
                <option value="">Selecione espécie</option>
                <option value="DOG">Cachorro</option>
                <option value="CAT">Gato</option>
            </select>
            {errors.species && <p className="error-message">{errors.species.message}</p>}
        </div>

        <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
                placeholder='Ex: Rex, Bob, etc...'
                id="name"
                type="text"
                {...register('name', { required: 'Este campo é obrigatório' })}
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>


        <div className="form-group">
            <label htmlFor="sizeGroup">Tamanho</label>
            <select id="sizeGroup" {...register('size', { required: 'Este campo é obrigatório' })}>
                <option value="">Selecione o Tamanho</option>
                <option value="SMALL">PEQUENO</option>
                <option value="MEDIUM">MÉDIO</option>
                <option value="LARGE">GRANDE</option>
            </select>
            {errors.sizeGroup && <p className="error-message">{errors.sizeGroup.message}</p>}
        </div>

        <div className="form-group">
            <label htmlFor="gender">Gênero</label>
            <select id="gender" {...register('gender', { required: 'Este campo é obrigatório' })}>
                <option value="">Selecione o Gênero</option>
                <option value="MALE">MACHO</option>
                <option value="FEMALE">FÊMEA</option>
            </select>
            {errors.gender && <p className="error-message">{errors.gender.message}</p>}
        </div>
    </div>
);

const Step2 = ({ register, errors }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(URL.createObjectURL(e.target.files[0]));
        }
    };
    return (
        <div>
            <div className="form-group">
                <label htmlFor="ageGroup">Faixa Etária</label>
                <select id="ageGroup" {...register('age', { required: 'Este campo é obrigatório' })}>
                    <option value="">Selecione a Faixa Etária</option>
                    <option value="BABY">BEBÊ</option>
                    <option value="ADULT">ADULTO</option>
                    <option value="OLD">IDOSO</option>
                </select>
                {errors.ageGroup && <p className="error-message">{errors.ageGroup.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <textarea
                    placeholder='Descreva o pet...'
                    id="description"
                    rows="4"
                    {...register('description', { required: 'Este campo é obrigatório' })}
                ></textarea>
                {errors.description && <p className="error-message">{errors.description.message}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="picture">Enviar Foto</label>
                <input
                    id="picture"
                    type="file"
                    {...register('picture', { required: 'Este campo é obrigatório' })}
                    onChange={handleImageChange}
                />
                {errors.picture && <p className="error-message">{errors.picture.message}</p>}
                {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: '100px', height: '100px' }} />}
            </div>

        </div>
    );
};
const PetForm = () => {
    const methods = useForm();
    const { getValues } = methods;
    const [step, setStep] = useState(1);
    const [selectedPoint, setSelectedPoint] = useState(null);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    // aqui é a função que vai ser chamada quando o formulario for enviado

    const onSubmit = async data => {

        const payload = {
            ...data,
            adoptionPointId: parseInt(data.adoptionPointId),
            picture: data.picture[0]['name']
        }

        const pet = await petController.create(payload)

    };

    const [allFieldsFilled, setAllFieldsFilled] = useState(false);

    const checkAllFieldsFilled = () => {
        const values = getValues();
        setAllFieldsFilled(Object.values(values).every(value => value !== null && value !== undefined && value !== ''));
    };



    return (
        <div className="form-container">
            <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>


                <h2>Cadastro de Pet</h2>

            </div>
            <FormProvider {...methods}>

                <form onSubmit={methods.handleSubmit(onSubmit)} onChange={checkAllFieldsFilled}>
                    {step === 1 && (
                        <SelectPointAdoption register={methods.register} errors={methods.formState.errors} setSelectedPoint={setSelectedPoint} />
                    )}
                    {step === 1 && <Step1 register={methods.register} errors={methods.formState.errors} />}
                    {step === 2 && <Step2 register={methods.register} errors={methods.formState.errors} />}

                    <div className="form-navigation">

                        {step > 1 && <button type="button" onClick={prevStep}>Anterior</button>}

                        {/* verifica se os campos foram preenchidos e desabilita o btao caso nao */}

                        {selectedPoint && step < 2 && allFieldsFilled ? (

                            <button type="button" onClick={nextStep}>Próximo</button>)
                            : (
                                <>

                                    {step < 2 && (
                                        <>
                                            <button type="button" disabled style={{ backgroundColor: '#3d68f781' }}>Próximo</button>

                                            <p style={{ color: 'red' }}>Obs: Preencha todos os campos para continuar!</p>
                                        </>
                                    )}
                                </>
                            )}



                        {step === 2 && <button type="submit">Enviar</button>}
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default PetForm;
