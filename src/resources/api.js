let baseApi = 'https://ajudapet-backend.onrender.com'

if (window.location.href.includes('staging') || window.location.href.includes('localhost')) {
    //baseApi = 'https://staging-ajudapet-backend.onrender.com'
    baseApi = 'http://localhost:4000'
}

export { baseApi }
