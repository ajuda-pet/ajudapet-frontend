import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import './form.css'; // Importação do arquivo CSS


const Step1 = ({ register, errors }) => {

    return (
        <div>
            <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                    placeholder="Ex: Apoio aos Animais RG"
                    id="name"
                    type="text"
                    {...register('name', { required: 'Este campo é obrigatório' })}
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <textarea
                    placeholder="Descrição do ponto de adoção"
                    id="description"
                    rows="4"
                    {...register('description', { required: 'Este campo é obrigatório' })}
                ></textarea>
                {errors.description && <p className="error-message">{errors.description.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="postal_code">Código Postal</label>
                <input
                    placeholder="12345-678"
                    id="postal_code"
                    type="text"
                    {...register('postal_code', { required: 'Este campo é obrigatório' })}
                />
                {errors.postal_code && <p className="error-message">{errors.postal_code.message}</p>}
            </div>
        </div>
    )
};

const Step2 = ({ register, errors }) => {
    const [groupId, setGroupId] = useState(null);
    //local storage pegando groupId


    return (
        <>
            <div>


                <input
                    placeholder="123"
                    id="group_id"
                    type="hidden"
                    value={groupId}
                    {...register('group_id')}

                />

                <div className="form-group">
                    <label htmlFor="address_state">Estado</label>
                    <select id="address_state" {...register('address_state', { required: 'Este campo é obrigatório' })}>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PR">PR</option>
                        <option value="PB">PB</option>
                        <option value="PA">PA</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS" style={{ backgroundColor: '#a0d1ff44' }}>RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SE">SE</option>
                        <option value="SP">SP</option>
                        <option value="TO">TO</option>
                    </select>
                    {errors.address_state && <p className="error-message">{errors.address_state.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="address_city">Cidade</label>
                    <input
                        placeholder="São Paulo"
                        id="address_city"
                        type="text"
                        {...register('address_city', { required: 'Este campo é obrigatório' })}
                    />
                    {errors.address_city && <p className="error-message">{errors.address_city.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="address_number">Número do Endereço</label>
                    <input
                        placeholder="123"
                        id="address_number"
                        type="number"
                        {...register('address_number', { required: 'Este campo é obrigatório' })}
                    />
                    {errors.address_number && <p className="error-message">{errors.address_number.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="address_country">País</label>
                    <input
                        placeholder="Brasil"
                        id="address_country"
                        type="text"
                        {...register('address_country', { required: 'Este campo é obrigatório' })}
                    />
                    {errors.address_country && <p className="error-message">{errors.address_country.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="observation">Observação</label>
                    <textarea
                        placeholder="Observações adicionais"
                        id="observation"
                        rows="4"
                        {...register('observation')}
                    ></textarea>
                    {errors.observation && <p className="error-message">{errors.observation.message}</p>}
                </div>
            </div>
        </>
    )
};

const PointForm = () => {
    const methods = useForm();
    const { getValues } = methods;
    const [step, setStep] = useState(1);
    const [allFieldsFilled, setAllFieldsFilled] = useState(false);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const onSubmit = data => {
        console.log(data);
    };

    const checkAllFieldsFilled = () => {
        const values = getValues();
        setAllFieldsFilled(Object.values(values).every(value => value !== null && value !== undefined && value !== ''));
    };

    return (
        <div className="form-container">
            <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <h2>Registrar Ponto de Adoção</h2>
            </div>
            <FormProvider {...methods}>

                <form onSubmit={methods.handleSubmit(onSubmit)} onChange={checkAllFieldsFilled}>
                    {step === 1 && <Step1 register={methods.register} errors={methods.formState.errors} />}
                    {step === 2 && <Step2 register={methods.register} errors={methods.formState.errors} />}

                    <div className="form-navigation">
                        {step > 1 && <button type="button" onClick={prevStep}>Anterior</button>}
                        {step < 2 && allFieldsFilled ? (
                            <button type="button" onClick={nextStep}>Próximo</button>
                        ) : (
                            step < 2 && (
                                <>
                                    <button type="button" disabled style={{ backgroundColor: '#3d68f781' }}>Próximo</button>
                                    <p style={{ color: 'red' }}>Obs: Preencha todos os campos para continuar!</p>
                                </>
                            )
                        )}
                        {step === 2 && <button type="submit">Enviar</button>}
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default PointForm;