import React from 'react';
import '../css/MintyTheme.css';
import { useDispatch } from 'react-redux';
import { setCurrentDeck } from '../store/slices/deckSlice';
import { setFlashcards } from '../store/slices/flashcardSlice';

function Deck({ deck, onDeckSelect }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setCurrentDeck(deck));
    dispatch(setFlashcards(deck.flashcards));
    // onDeckSelect(deck)
  };

  return (
    <h1 onClick={handleClick}>{deck.title}</h1>
  );
}

export default Deck;
