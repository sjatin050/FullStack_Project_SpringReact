import {apiClient} from './ApiClient.js';


export const executeJwtRegisterService
    = (firstname,lastname,email, password,role) =>
        apiClient.post(`/register`,{firstname,lastname,email,password,role})