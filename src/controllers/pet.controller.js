import axios from 'axios'
import { baseApi } from '../resources/api.js'

const petController = {
    get: async () => {
        try {
            const response = await axios.get(`${baseApi}/noauth/pets`)

            if (!response.data.success) {
                return response.data.message
            }

            return response.data
        }

        catch (error) {
            console.error(error)
        }
    },

    getById: async (petId) => {
        try {
            const response = await axios.get(`${baseApi}/noauth/pets/${petId}`)
            
            if (!response.data.succes) {
                return response.data.message
            }

            return response.data    
        }

        catch (error) {
            console.error(error)
        }
    },

    create: async(payload) => {
        try {
            const response = await axios.post(`${baseApi}/auth/pets`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': window.localStorage.getItem('token')
                }
            })

            if (!response.data.success) {
                return response.data.message
            }

            return response.data
        }

        catch (error) {
            console.error(error)
        }

    },

    updated: async(petId, payload) => {
        try {
            const response = await axios.put(`${baseApi}/auth/pets/${petId}`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': window.localStorage.getItem('token')
                }
            })

            if (!response.data.success) {
                return response.data.message
            }
        }

        catch (error) {
            console.error(error)
        }
    }
}

export default petController