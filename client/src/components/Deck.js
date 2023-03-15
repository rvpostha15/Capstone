import React from 'react';
import '../css/MintyTheme.css';
import { useDispatch } from 'react-redux';
import { setCurrentDeck } from '../store/slices/deckSlice';

function Deck({ deck }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setCurrentDeck(deck));
  };

  return (
    <h1 onClick={handleClick}>{deck.title}</h1>
  );
}

export default Deck;
