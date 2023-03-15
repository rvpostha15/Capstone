// src/store/rootReducer.js
import { combineReducers } from 'redux';
import deckSlice from './slices/deckSlice';
import teacherSlice from './slices/teacherSlice';
import studentSlice from './slices/studentSlice';

const rootReducer = combineReducers({
  deck: deckSlice,
  teacher: teacherSlice,
  student: studentSlice,
});

export default rootReducer;

