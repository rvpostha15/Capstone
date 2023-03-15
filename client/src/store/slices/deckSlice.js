import { createSlice, createAction } from '@reduxjs/toolkit';

const initialState = {
  currentDeck: {},
  decks: [],
};

const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    setCurrentDeck: (state, action) => {
      state.currentDeck = action.payload;
    },
    setDecks: (state, action) => {
        state.decks = action.payload;
    },
    addDeck: (state, action) => {
      state.decks.push(action.payload);
    },
    addFlashcard: (state, action) => {
      const deckId = action.payload.deckId;
      const flashcard = action.payload.flashcard;
      const deck = state.decks.find((deck) => deck.id === deckId);
      if (deck) {
        deck.flashcards.push(flashcard);
      }
    },
    updateCurrentDeck: (state, action) => {
      state.currentDeck.flashcards.push(action.payload);
    },
  },
});


export const { setCurrentDeck, setDecks, addDeck, addFlashcard, updateCurrentDeck } = deckSlice.actions;
export default deckSlice.reducer;