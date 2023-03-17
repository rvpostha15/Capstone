// src/store/rootReducer.js
import { combineReducers } from 'redux';
import deckSlice from './slices/deckSlice';
import teacherSlice from './slices/teacherSlice';
import studentSlice from './slices/studentSlice';
import flashcardSlice from './slices/flashcardSlice';
import assignmentSlice from './slices/assignmentSlice';

const rootReducer = combineReducers({
  deck: deckSlice,
  teacher: teacherSlice,
  student: studentSlice,
  flashcard: flashcardSlice,
  assignment: assignmentSlice,
});

export default rootReducer;

