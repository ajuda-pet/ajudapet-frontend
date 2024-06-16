let baseApi = 'https://ajudapet-backend.onrender.com'

if (window.location.href.includes('staging') || window.location.href.includes('localhost')) {
    baseApi = 'https://ajudapet-backend.onrender.com'
}

export { baseApi }
