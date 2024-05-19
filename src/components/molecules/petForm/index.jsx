import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import './form.css'; // Importação do arquivo CSS


const SelectPointAdoption = ({ register, errors, setSelectedPoint }) => {
    const [points, setPoints] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/adoption-points')
    //         .then(response => response.json())
    //         .then(data => setPoints(data));
    // }, []);
    useEffect(() => {
        Promise.resolve([
            { id: 1, name: 'Ponto de Adoção 1' },
            { id: 2, name: 'Ponto de Adoção 2' },
            { id: 3, name: 'Ponto de Adoção 3' },
        ])
            .then(data => setPoints(data));
    }, []);

    return (
        <div className="form-group">
            <label htmlFor="select">Ponto de Adoção</label>
            <select id="adoption_point_id" {...register('adoption_point_id', { required: 'Este campo é obrigatório' })} onChange={(e) => setSelectedPoint(e.target.value)}>
                <option value="">Selecione o Ponto de Adoção</option>
                {points.map((point) => (
                    <option key={point.id} value={point.id}>{point.name}</option>
                ))}
            </select>
        </div>
    );
};


const Step1 = ({ register, errors }) => (

    <div>

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
            <label htmlFor="size_group">Tamanho</label>
            <select id="size_group" {...register('size_group', { required: 'Este campo é obrigatório' })}>
                <option value="">Selecione o Tamanho</option>
                <option value="SMALL">PEQUENO</option>
                <option value="MEDIUM">MÉDIO</option>
                <option value="LARGE">GRANDE</option>
            </select>
            {errors.size_group && <p className="error-message">{errors.size_group.message}</p>}
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
                <label htmlFor="age_group">Faixa Etária</label>
                <select id="age_group" {...register('age_group', { required: 'Este campo é obrigatório' })}>
                    <option value="">Selecione a Faixa Etária</option>
                    <option value="BABY">BEBÊ</option>
                    <option value="ADULT">ADULTO</option>
                    <option value="OLD">IDOSO</option>
                </select>
                {errors.age_group && <p className="error-message">{errors.age_group.message}</p>}
            </div>


            <div className="form-group">
                <label htmlFor="species">Espécie</label>
                <input
                    placeholder='Ex: Cachorro, Gato, etc...'
                    id="species"
                    type="text"
                    {...register('species', { required: 'Este campo é obrigatório' })}
                />
                {errors.species && <p className="error-message">{errors.species.message}</p>}
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

    const onSubmit = data => {
        console.log(data);
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
                {step === 1 && (
                    <SelectPointAdoption register={methods.register} errors={methods.formState.errors} setSelectedPoint={setSelectedPoint} />
                )}
                <form onSubmit={methods.handleSubmit(onSubmit)} onChange={checkAllFieldsFilled}>
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
