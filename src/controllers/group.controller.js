import axios from "axios"
import { baseApi } from "../resources/api"

const noAuthEndpoint = `${baseApi}/noauth/groups`
const authGroupsEndpoint = `${baseApi}/auth/groups`

const groupController = {
    getById: async (groupId) => {
        try { 
            const response = await axios.get(`${noAuthEndpoint}/${groupId}`)
            return response.data
        }

        catch (error) {
            console.error(error)
            if (error.response.status == 404) {
                window.location.href = '/login'
            }
        }
    },

    get: async () => {
        try {
            const response = await axios.get(`${noAuthEndpoint}`)
            return response.data
        }

        catch (error) {
            console.error(error)
        }
    },

    getAdoptionPoints: async () => {
        try {
            const response = await axios.get(`${noAuthEndpoint}/adoption-points`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': window.localStorage.getItem('token')
                }
            })
            return response.data
        }

        catch (error) {
            console.error(error)
        }
    },

    createSocialMedia: async (socialMedia) => {
        try {
            const response = await axios.post(`${authGroupsEndpoint}/social-media`, socialMedia, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': window.localStorage.getItem('token')
                }
            })

            return response.data
        }

        catch (error) {
            console.error(error)
        }
    },

    updateSocialMedia: async (socialMediaId, account, plataform) => {
        try {
            const response = await axios.put(`${authGroupsEndpoint}/social-media/${plataform}`, account, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': window.localStorage.getItem('token')
                }
            })

            return response.data
        }

        catch (error) {
            console.error(error)
        }
    }
}

export default groupController