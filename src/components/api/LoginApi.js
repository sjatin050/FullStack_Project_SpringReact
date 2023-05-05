import {apiClient} from './ApiClient.js';

// export const executeJwtAuthenticationService
//     = (username, password) =>
//         apiClient.post(`/authenticate`,{username,password})


export const executeJwtAuthenticationService
    = (email, password) =>
        apiClient.post(`/authenticate`,{email,password})