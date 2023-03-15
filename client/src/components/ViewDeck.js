import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDecks } from '../store/slices/deckSlice'
import Flashcard from './Flashcard';
import '../css/ViewDeck.css';
import NewFlashcard from './NewFlashcard';

function ViewDeck() {
  const currentDeck = useSelector((state) => state.deck.currentDeck);
  const currentTeacher = useSelector((state) => state.teacher.currentTeacher);
  const [newFlashcard, setNewFlashcard] = useState(false);
  const [isSure, setIsSure] = useState(false);
  const flashcards = currentDeck.flashcards || [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const flashcardList = flashcards.map((flashcard) => (
    <Flashcard key={flashcard.id} flashcard={flashcard} />
  ));
  console.log("teacher:", currentTeacher.id,
  "deck", currentDeck.teacher_id
  )


  const toggleFlashcardForm = () => {
    setNewFlashcard(!newFlashcard)
  }
  
  const deleteCheck = () => {
    setIsSure(true)
  }
  
  const handleNotSure = () => {
    setIsSure(false)
  }

  const handleDeleteDeck = () => {
    // history.push('/decks')
    // fetch(`/decks/${currentDeck.id}`,{
    // method: 'DELETE'
    // })
    // .then(()=>)
  }

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
      {currentDeck.teacher_id === currentTeacher.id ? (
        <button className='minty-delete-button' onClick={deleteCheck}>Delete Deck</button>
        ) : (
          null
      )}
      {isSure ? (
        <div>
          <h3>
          Are you sure you'd like to delete this deck?
          </h3>
          <div>
            <button className='minty-delete-button' onClick={handleDeleteDeck}>Yes, I'm sure</button>
            <button className='minty-button' onClick={handleNotSure}>No, don't delete!</button>
          </div>
        </div>
      ) : ( 
        null
      )}
    </div>
  );
}

export default ViewDeck;
