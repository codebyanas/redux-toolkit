import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    libraryState: [],
};


const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: nanoid(),
                text: action.payload.text,
                category: action.payload.category,
                priority: action.payload.priority,
                dueDate: action.payload.dueDate,
                status: 'To Do', 
            };
            state.libraryState.push(newItem);
        },
        deleteItem: (state, action) => {
            state.libraryState = state.libraryState.filter(item => item.id !== action.payload);
        },
        updateStatus: (state, action) => {
            const { id, status } = action.payload;
            const task = state.libraryState.find(item => item.id === id);
            if (task) {
                task.status = status;
            }
        },
        updatePriority: (state, action) => {
            const { id, priority } = action.payload;
            const task = state.libraryState.find(item => item.id === id);
            if (task) {
                task.priority = priority;
            }
        },
        updateDueDate: (state, action) => {
            const { id, dueDate } = action.payload;
            const task = state.libraryState.find(item => item.id === id);
            if (task) {
                task.dueDate = dueDate;
            }
        },
    },
});

export const { addItem, deleteItem, updateStatus, updatePriority, updateDueDate } = librarySlice.actions;

export default librarySlice.reducer;
