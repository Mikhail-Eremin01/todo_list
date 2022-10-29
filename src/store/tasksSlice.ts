import { createSlice, createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";
import {login, registration, logout} from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from '../models/response/AuthResponse';
import { API_URL } from "../http";

type ITask = {
    _id: string,
    name: string,
    completed: boolean
}
interface IInitialState{
    tasks: ITask[],
    loading: boolean,
    active: number,
    completed: number
    error: null | string | SerializedError,
}

const initialState:IInitialState = {
    tasks: [],
    active: 0,
    completed: 0,
    loading: false,
    error: null,
}
interface MyKnownError {
    message: string,
    status: number
}

export const fetchGetAllTasks = createAsyncThunk<ITask[], undefined, {rejectValue: MyKnownError}>(
    'tasks/fetchgetAllTasks',
    async function(_, {rejectWithValue}){
        const response = await fetch('api/tasks')
        const data = await response.json();

        if(response.status === 400) {
            console.log(rejectWithValue(response as unknown as MyKnownError))
            return rejectWithValue(response as unknown as MyKnownError)
        }
        return data;
    }
);

export const fetchCreateTask = createAsyncThunk<ITask[], string, {rejectValue: MyKnownError}>(
    'tasks/fetchCreateTask',
    async function(name, {rejectWithValue}){
        const body = {
            name
        }
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();

        if(response.status === 400) {
            console.log(rejectWithValue(response as unknown as MyKnownError))
            return rejectWithValue(response as unknown as MyKnownError)
        }
        return data;
    }
);

interface IUpdateTask {
    id: string;
    name: string
}
export const fetchUpdateTask = createAsyncThunk<ITask[], IUpdateTask, {rejectValue: MyKnownError}>(
    'tasks/fetchUpdateTask',
    async function(task, {rejectWithValue}){
        const {id, name} = task;
        const body = {
            id,
            name
        }
        const response = await fetch('/api/tasks', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();

        if(response.status === 400) {
            console.log(rejectWithValue(response as unknown as MyKnownError))
            return rejectWithValue(response as unknown as MyKnownError)
        }
        return data;
    }
);
export const fetchDeleteTask = createAsyncThunk<ITask[], string, {rejectValue: MyKnownError}>(
    'tasks/fetchDeleteTask',
    async function(id, {rejectWithValue}){
        const body = {
            id
        }
        const response = await fetch('/api/tasks', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();

        if(response.status === 400) {
            console.log(rejectWithValue(response as unknown as MyKnownError))
            return rejectWithValue(response as unknown as MyKnownError)
        }
        return data;
    }
);
export const fetchTasksCondition = createAsyncThunk<ITask[], string, {rejectValue: MyKnownError}>(
    'tasks/fetchTasksCondition',
    async function(id, {rejectWithValue}){
        const body = {
            id
        }
        const response = await fetch('/api/tasksCondition', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();

        if(response.status === 400) {
            console.log(rejectWithValue(response as unknown as MyKnownError))
            return rejectWithValue(response as unknown as MyKnownError)
        }
        return data;
    }
);

const tasks = createSlice({
    name: 'user',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchGetAllTasks.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchGetAllTasks.fulfilled, (state, action) => {
            state.tasks = [...action.payload];

            state.active = action.payload.filter(elem => elem.completed == false).length;
            state.completed = action.payload.filter(elem => elem.completed == true).length;
            state.loading = false;
        })

        builder
        .addCase(fetchCreateTask.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCreateTask.fulfilled, (state, action) => {
            state.tasks = [...action.payload];
            state.active = action.payload.filter(elem => elem.completed == false).length;
            state.completed = action.payload.filter(elem => elem.completed == true).length;
            state.loading = false;
        })

        builder
        .addCase(fetchUpdateTask.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUpdateTask.fulfilled, (state, action) => {
            state.tasks = [...action.payload];
            state.active = action.payload.filter(elem => elem.completed == false).length;
            state.completed = action.payload.filter(elem => elem.completed == true).length;
            state.loading = false;
        })

        builder
        .addCase(fetchDeleteTask.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchDeleteTask.fulfilled, (state, action) => {
            state.tasks = [...action.payload];
            state.active = action.payload.filter(elem => elem.completed == false).length;
            state.completed = action.payload.filter(elem => elem.completed == true).length;
            state.loading = false;
        })

        builder
        .addCase(fetchTasksCondition.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchTasksCondition.fulfilled, (state, action) => {
            state.tasks = [...action.payload];
            state.active = action.payload.filter(elem => elem.completed == false).length;
            state.completed = action.payload.filter(elem => elem.completed == true).length;
            state.loading = false;
        })
    }
})

export default tasks.reducer;