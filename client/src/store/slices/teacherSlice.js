import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTeacher: {},
};

const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    setCurrentTeacher: (state, action) => {
      state.currentTeacher = action.payload;
    },
  },
});

export const { setCurrentTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
