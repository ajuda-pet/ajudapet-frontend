import axios from 'axios';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post('/api/register', userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        throw new Error('Erro ao registrar usuário.');
    }
}