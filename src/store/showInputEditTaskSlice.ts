import { createSlice } from "@reduxjs/toolkit";

interface IConditionInput{
    showInput: boolean;
    todosId: string;
}
const conditionInput:IConditionInput = {
    showInput: false,
    todosId: ''
};

const showInputEditTask = createSlice({
    name: 'showInputEditTask',
    initialState: {
        conditionInput,
    },
    reducers: {
       showInput(state, action) {
        state.conditionInput.showInput = true;
        state.conditionInput.todosId = action.payload;
       },
       hideInput(state) {
        state.conditionInput.showInput = false;
        state.conditionInput.todosId = '';
       }
       
    }
})

export const { showInput, hideInput } = showInputEditTask.actions;
export default showInputEditTask.reducer;