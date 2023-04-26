import {apiClient} from './ApiClient.js';

export const executeJwtAuthenticationService
    = (username, password) =>
        apiClient.post(`/authenticate`,{username,password})