import { createSlice } from "@reduxjs/toolkit";

const conditionInput:boolean = false;

const showInputEditTask = createSlice({
    name: 'showInputEditTask',
    initialState: {
        conditionInput,
    },
    reducers: {
       showInput(state) {
        state.conditionInput = true;
       },
       hideInput(state) {
        state.conditionInput = false;
       }
       
    }
})

export const { showInput, hideInput } = showInputEditTask.actions;
export default showInputEditTask.reducer;