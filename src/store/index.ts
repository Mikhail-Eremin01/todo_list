import { configureStore } from "@reduxjs/toolkit";
import showInputEditTaskReducer from "./showInputEditTaskSlice";
import authorizationReducer from "./authorizationSlice";
import tasksReducer from './tasksSlice';


const store = configureStore({
    reducer: {
        showInputEditTask: showInputEditTaskReducer,
        authorization: authorizationReducer,
        tasks: tasksReducer,
    },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;