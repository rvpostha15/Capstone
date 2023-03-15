import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { setCurrentDeck, setDecks } = deckSlice.actions;
export default deckSlice.reducer;