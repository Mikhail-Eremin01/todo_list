import api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export const login = async(email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return api.post<AuthResponse>('/login', {email, password})
}

export const registration = async(name:string | undefined, email: string, password: string):Promise<AxiosResponse<AuthResponse>> => {
    return api.post<AuthResponse>('/registration', {name, email, password})
}

export const logout = async(): Promise<void> => {
    return api.post('/logout')
}