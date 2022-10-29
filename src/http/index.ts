import axios from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';

export const API_URL = 'http://localhost:3002/api';

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

api.interceptors.response.use((config) => {
    return config;
}, async(err) => {
    console.log(err.response.status);
    const originalRequest = err.config;
    if(err.response.status === 401 && err.config && !err.config._isRetry) {
        originalRequest._isRetry = true;
        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken)
            return api.request(originalRequest);
        } catch(e) {
            console.log('User is not authorized')
        }
    }
    if(err.response.status === 400) {
        console.log(err.response.data.message);
        return {message: err.response.data.message, status: err.response.status};
    }
    throw err;
})

export default api;