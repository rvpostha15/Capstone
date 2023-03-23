import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTeacher: {},
  teachers: [],
};

const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    setCurrentTeacher: (state, action) => {
      state.currentTeacher = action.payload;
    },
    setTeachers: (state, action) => {
      state.teachers = action.payload;
    }
  },
});

export const { setCurrentTeacher, setTeachers } = teacherSlice.actions;
export default teacherSlice.reducer;
