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
    error: null | SerializedError,
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
interface IRespUser {
    id: string;
    name: string;
    email: string;
}

export const fetchLogin = createAsyncThunk<IRespUser, IUsersInfo, {rejectValue: MyKnownError}>(
    'user/fetchLogin',
    async function(usersInfo:IUsersInfo, {rejectWithValue}){
        const {email, password} = usersInfo
        const response = await login(email, password)
        if(response.status === 400) {
            console.log(rejectWithValue(response as unknown as MyKnownError))
            return rejectWithValue(response as unknown as MyKnownError)
        }
        localStorage.setItem('token', response.data.accessToken)
        return response.data.user;
    }
);

export const fetchRegistration = createAsyncThunk<IRespUser, IUsersInfo, {rejectValue: MyKnownError}>(
    'user/fetchRegistration',
    async function(usersInfo:IUsersInfo, {rejectWithValue}){
        const {name, email, password} = usersInfo
        const response = await registration(name, email, password)
        console.log(response)
        if(response.status === 400) {
            console.log(rejectWithValue(response as unknown as MyKnownError))
            return rejectWithValue(response as unknown as MyKnownError)
        }
        localStorage.setItem('token', response.data.accessToken)
        return response.data.user;
    }
);

export const fetchLogout = createAsyncThunk<IUser, undefined, {rejectValue: string}>(
    'user/fetchLogout',
    async function(_, {rejectWithValue}) {
        try{
            await logout();
            localStorage.removeItem('token')
            return {} as IUser;
        } catch(err) {
            return rejectWithValue((err as Error).message)
        }
    }
);

export const fetchCheckAuth = createAsyncThunk<IRespUser, undefined, {rejectValue: string}>(
    'user/fetchCheckAuth',
    async function(_, {rejectWithValue}){
        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
            console.log(response);
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
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
            state.isAuth = true;
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(fetchLogin.rejected, (state, action) => {
            if (action.payload) {
              state.error = action.payload
              state.loading = false;
            } else {
              state.error = action.error
              state.loading = false;
            }
        })
        
        builder
        .addCase(fetchLogout.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchLogout.fulfilled, (state, action) => {
            state.isAuth = false;
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
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(fetchRegistration.rejected, (state, action) => {
            if (action.payload) {
              state.error = action.payload
              state.loading = false;
            } else {
              state.error = action.error
              state.loading = false;
            }
        })

        builder
        .addCase(fetchCheckAuth.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCheckAuth.fulfilled, (state, action) => {
            state.isAuth = true;
            state.user = action.payload;
            state.loading = false;
        })
    }
})

export default loginUser.reducer;