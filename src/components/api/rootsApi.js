
import {apiClient} from './ApiClient';

export const getAllRootApi = () => apiClient.get(`/results`)

export const retrieveRootsByIdApi
  = (values) => apiClient.get(`/results/${values}`)

export const retrieveRootById
  = (_id) => apiClient.get(`/result/${_id}`)

export const updateEmailApi
  = (_id, email) => apiClient.put(`/results/${_id}/email/${email}`)
