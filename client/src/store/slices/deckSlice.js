import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  currentDeck: {},
  decks: [],
};

export const deleteDeck = createAsyncThunk(
  'deck/deleteDeck',
  async (deckId, { dispatch }) => {
    const response = await fetch(`/decks/${deckId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      dispatch(removeDeck(deckId));
    }
  }
);

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
    updateCurrentDeck: (state, action) => {
      state.currentDeck.flashcards.push(action.payload);
    },
    removeDeck: (state, action) => {
      state.decks = state.decks.filter((deck) => deck.id !== action.payload);
    },
  },
});


export const { 
  setCurrentDeck,
  setDecks,
  addDeck,  
  updateCurrentDeck,
  removeDeck, 
} = deckSlice.actions;
export default deckSlice.reducer;