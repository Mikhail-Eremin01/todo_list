import { createSlice, createAsyncThunk, SerializedError } from "@reduxjs/toolkit";

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
interface IUpdateTask {
    id: string;
    name: string;
    usersId: string;
}
interface transmittedInfo{
    id: string;
    usersId: string;
}

export const fetchGetAllTasks = createAsyncThunk<ITask[], string, {rejectValue: MyKnownError}>(
    'tasks/fetchgetAllTasks',
    async function(usersId, {rejectWithValue}){
        const response = await fetch(`api/tasks/${usersId}`)
        const data = await response.json();

        if(response.status === 400) {
            console.log(rejectWithValue(response as unknown as MyKnownError))
            return rejectWithValue(response as unknown as MyKnownError)
        }
        return data;
    }
);

export const fetchCreateTask = createAsyncThunk<ITask[], {name: string, usersId: string}, {rejectValue: MyKnownError}>(
    'tasks/fetchCreateTask',
    async function(usersInfo, {rejectWithValue}){
        const {name, usersId} = usersInfo
        const body = {
            name,
            usersId
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


export const fetchUpdateTask = createAsyncThunk<ITask[], IUpdateTask, {rejectValue: MyKnownError}>(
    'tasks/fetchUpdateTask',
    async function(task, {rejectWithValue}){
        const {id, name, usersId} = task;
        const body:IUpdateTask = {
            id,
            name,
            usersId
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
export const fetchDeleteTask = createAsyncThunk<ITask[], transmittedInfo, {rejectValue: MyKnownError}>(
    'tasks/fetchDeleteTask',
    async function(info, {rejectWithValue}){
        const {id, usersId} = info;
        const body: transmittedInfo = {
            id,
            usersId
        }
        const response = await fetch(`/api/tasks`, {
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
export const fetchTasksCondition = createAsyncThunk<ITask[], transmittedInfo, {rejectValue: MyKnownError}>(
    'tasks/fetchTasksCondition',
    async function(info, {rejectWithValue}){
        const {id, usersId} = info;
        const body: transmittedInfo = {
            id,
            usersId
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
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchGetAllTasks.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchGetAllTasks.fulfilled, (state, action) => {
            state.tasks = [...action.payload];
            state.active = action.payload.filter(elem => elem.completed === false).length;
            state.completed = action.payload.filter(elem => elem.completed === true).length;
            state.loading = false;
        })

        builder
        .addCase(fetchCreateTask.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCreateTask.fulfilled, (state, action) => {
            state.tasks = [...action.payload];
            state.active = action.payload.filter(elem => elem.completed === false).length;
            state.completed = action.payload.filter(elem => elem.completed === true).length;
            state.loading = false;
        })

        builder
        .addCase(fetchUpdateTask.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUpdateTask.fulfilled, (state, action) => {
            state.tasks = [...action.payload];
            state.active = action.payload.filter(elem => elem.completed === false).length;
            state.completed = action.payload.filter(elem => elem.completed === true).length;
            state.loading = false;
        })

        builder
        .addCase(fetchDeleteTask.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchDeleteTask.fulfilled, (state, action) => {
            state.tasks = [...action.payload];
            state.active = action.payload.filter(elem => elem.completed === false).length;
            state.completed = action.payload.filter(elem => elem.completed === true).length;
            state.loading = false;
        })

        builder
        .addCase(fetchTasksCondition.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchTasksCondition.fulfilled, (state, action) => {
            state.tasks = [...action.payload];
            state.active = action.payload.filter(elem => elem.completed === false).length;
            state.completed = action.payload.filter(elem => elem.completed === true).length;
            state.loading = false;
        })
    }
})

export default tasks.reducer;