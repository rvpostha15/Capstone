import React from 'react';
import Flashcard from './Flashcard';
import '../css/ViewDeck.css';
import { useSelector } from 'react-redux';

function ViewDeck() {
  const currentDeck = useSelector((state) => state.deck.currentDeck);
  const { title, flashcards } = currentDeck;

  const flashcardList = flashcards.map((flashcard) => (
    <Flashcard key={flashcard.id} flashcard={flashcard} />
  ));

  return (
    <div className="view-deck-container">
      <div className="title">{title}</div>
      {flashcardList}
    </div>
  );
}

export default ViewDeck;
