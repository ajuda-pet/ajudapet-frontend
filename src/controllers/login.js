import axios from 'axios';
import { baseApi } from '../resources/api';

export const loginUser = async (userData) => {


    try {

        const response = await axios.post(`${baseApi}/noauth/signin`, userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response)
        if (response.data.success === true) {
            localStorage.setItem('token', response.data.info);
            return response.data.info;
        } else {
            return false;
        }
        // Por que info e não data.token? Verificar!!
    } catch (error) {
        console.log(error)
    }
}