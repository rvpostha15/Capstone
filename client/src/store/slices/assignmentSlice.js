import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAssignment: {},
    assignments: [],
};

const assignmentSlice = createSlice({
    name: 'assignment',
    initialState,
    reducers: {
        setCurrentAssignment: (state, action) => {
            state.currentAssignment = action.payload;
        },
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
            state.assignments.push(action.payload);
        }
    },
});

export const { setAssignments, addAssignment, setCurrentAssignment, } = assignmentSlice.actions;
export default assignmentSlice.reducer;