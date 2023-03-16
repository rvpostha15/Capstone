import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    currentFlashcard: {},
    flashcards: [],
}

export const deleteFlashcard = createAsyncThunk(
    'flashcard/deleteFlashcard',
    async ({ deckId, flashcardId }, { dispatch }) => {
      const response = await fetch(`/decks/${deckId}/flashcards/${flashcardId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        dispatch(removeFlashcard(flashcardId));
      }
    }
);

const flashcardSlice = createSlice({
    name: 'flashcard',
    initialState,
    reducers: {
        setCurrentFlashcard: (state, action) => {
            state.currentFlashcard = action.payload;
        },
        setFlashcards: (state, action) => {
            state.flashcards = action.payload;
        },
        addFlashcard: (state, action) => {
            state.flashcards.push(action.payload)
        },
        removeFlashcard: (state, action) => {
            const flashcardId = action.payload;
            state.flashcards = state.flashcards.filter(
                (flashcard) => flashcard.id !== flashcardId
            );
            console.log('Flashcard removed from state:', flashcardId);
        },
          
    }
})

export const {
    setCurrentFlashcard,
    setFlashcards,
    addFlashcard,
    removeFlashcard,
} = flashcardSlice.actions;
export default flashcardSlice.reducer;