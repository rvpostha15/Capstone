import { useState } from 'react';
import Flashcard from './Flashcard';
import '../css/ViewDeck.css';
import { useSelector } from 'react-redux';
import NewFlashcard from './NewFlashcard';

function ViewDeck() {
  const currentDeck = useSelector((state) => state.deck.currentDeck);
  const [newFlashcard, setNewFlashcard] = useState(false)
  const flashcards = currentDeck.flashcards || [];

  const flashcardList = flashcards.map((flashcard) => (
    <Flashcard key={flashcard.id} flashcard={flashcard} />
  ));

  const toggleFlashcardForm = () => {
    setNewFlashcard(!newFlashcard)
  }
  console.log(flashcards)
  return (
    <div className="view-deck-container">
      <h1 className="title">{currentDeck.title}</h1>
      <button 
        onClick={toggleFlashcardForm} 
        className='minty-button'
      >Add FlashCard</button>
      {newFlashcard ? (
        <NewFlashcard/>
      ) : (
        null
      )}
      {flashcardList}
    </div>
  );
}

export default ViewDeck;
