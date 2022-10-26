import { configureStore } from "@reduxjs/toolkit";
import showInputEditTaskReducer from "./showInputEditTaskSlice";


const store = configureStore({
    reducer: {
        showInputEditTask: showInputEditTaskReducer,
    },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;