import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
};

const assignmentSlice = createSlice({
    name: 'assignment',
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
    },
});

export const { setAssignments } = assignmentSlice.actions;
export default assignmentSlice.reducer;