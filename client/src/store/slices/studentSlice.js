import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  currentStudent: [],
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    setCurrentStudent: (state, action) => {
      state.currentStudent = action.payload;
    },
  },
});

export const { setStudents, setCurrentStudent } = studentSlice.actions;
export default studentSlice.reducer;
