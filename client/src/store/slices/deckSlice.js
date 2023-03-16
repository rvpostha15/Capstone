import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';

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

export const deleteFlashcard = createAsyncThunk(
  'deck/deleteFlashcard',
  async ({ deckId, flashcardId }, { dispatch }) => {
    const response = await fetch(`/decks/${deckId}/flashcards/${flashcardId}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      dispatch(removeFlashcard({ deckId, flashcardId }))
    }
  }
)


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
    removeDeck: (state, action) => {
      state.decks = state.decks.filter((deck) => deck.id !== action.payload);
    },
    removeFlashcard: (state, action) => {
      const { deckId, flashcardId } = action.payload;
      const deck = state.decks.find((deck) => deck.id === deckId);
      if (deck) {
        deck.flashcards = deck.flashcards.filter((flashcard) => flashcard.id !== flashcardId);
        console.log('Flashcard removed from state:', flashcardId);
      }
    },
  },
});


export const { 
  setCurrentDeck,
  setDecks,
  addDeck, 
  addFlashcard, 
  updateCurrentDeck,
  removeDeck, 
  removeFlashcard,
} = deckSlice.actions;
export default deckSlice.reducer;