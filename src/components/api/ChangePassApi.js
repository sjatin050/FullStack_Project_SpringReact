import {apiClient} from './ApiClient.js';


export const changePasswordService
    = (email, newPassword) =>
        apiClient.post(`/changePassword`,{email,newPassword})
