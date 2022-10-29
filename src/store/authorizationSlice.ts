import { createSlice, createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";
import {login, registration, logout} from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from '../models/response/AuthResponse';
import { API_URL } from "../http";


interface IInitialState{
    user: IUser;
    isAuth: boolean,
    loading: boolean,
    error: null | string | SerializedError,
}
const initialState:IInitialState = {
    user: {} as IUser,
    isAuth: false,
    loading: false,
    error: null,
}
interface IUsersInfo {
    name?:string | undefined,
    email: string,
    password: string
}
interface MyKnownError {
    message: string,
    status: number
  }

export const fetchLogin = createAsyncThunk<any, IUsersInfo, {rejectValue: MyKnownError}>(
    'user/fetchLogin',
    async function(usersInfo, {rejectWithValue}){
        const {email, password} = usersInfo
        const response = await login(email, password)
        console.log(response);
        if(response.status === 400) {
            console.log(rejectWithValue(response as unknown as MyKnownError))
            return rejectWithValue(response as unknown as MyKnownError)
        }
        localStorage.setItem('token', response.data.accessToken)
        return response.data.user;
    }
);

export const fetchRegistration = createAsyncThunk(
    'user/fetchRegistration',
    async function(usersInfo:IUsersInfo, {rejectWithValue}){
        try{
            const {name, email, password} = usersInfo
            const response = await registration(name, email, password)
            localStorage.setItem('token', response.data.accessToken)
            return response.data.user;
        } catch(err) {
            return rejectWithValue((err as Error).message)
        }
    }
);

export const fetchLogout = createAsyncThunk(
    'user/fetchLogout',
    async function(_, {rejectWithValue}) {
        try{
            await logout()
            localStorage.removeItem('token')
            return {} as IUser;
        } catch(err) {
            return rejectWithValue((err as Error).message)
        }
    }
);

export const fetchCheckAuth = createAsyncThunk(
    'user/fetchCheckAuth',
    async function(_, {rejectWithValue}){
        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken)
            return response.data.user;
        } catch(err) {
            return rejectWithValue((err as Error).message)
        }
    }
);

const loginUser = createSlice({
    name: 'user',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
            state.isAuth = true;
            console.log(action.payload)
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(fetchLogin.rejected, (state, action) => {
            if (action.payload) {
                console.log(1)
                console.log(action.payload)
              state.error = action.payload
              console.log(state.error)
            } else {
                console.log(action.error.code)
              state.error = action.error
            }
        })
        
        builder
        .addCase(fetchLogout.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchLogout.fulfilled, (state, action) => {
            state.isAuth = false;
            console.log(action.payload)
            state.user = action.payload;
            state.loading = false;
        })

        builder
        .addCase(fetchRegistration.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchRegistration.fulfilled, (state, action) => {
            state.isAuth = true;
            console.log(action.payload)
            state.user = action.payload;
            state.loading = false;
        })

        builder
        .addCase(fetchCheckAuth.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCheckAuth.fulfilled, (state, action) => {
            state.isAuth = true;
            console.log(action.payload)
            state.user = action.payload;
            state.loading = false;
        })
    }
})

export default loginUser.reducer;