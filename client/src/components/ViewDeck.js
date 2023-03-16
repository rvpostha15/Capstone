import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setDecks, deleteDeck } from '../store/slices/deckSlice'
import Flashcard from './Flashcard';
import '../css/ViewDeck.css';
import NewFlashcard from './NewFlashcard';

function ViewDeck(props) {
  const decks = useSelector((state) => state.deck.decks);
  const currentDeck = useSelector((state) => state.deck.currentDeck);
  const flashcards = currentDeck.flashcards || [];
  const dispatch = useDispatch();
  const currentTeacher = useSelector((state) => state.teacher.currentTeacher);
  const [newFlashcard, setNewFlashcard] = useState(false);
  const [isSure, setIsSure] = useState(false);
  const renderFlashcards = useSelector((state) => state.deck.currentDeck.flashcards || []);

  const flashcardList = renderFlashcards.map((flashcard) => (
    <Flashcard key={flashcard.id} flashcard={flashcard} />
  ));

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
    dispatch(deleteDeck(currentDeck.id));
    props.history.push('/decks')
  }

  return (
    <div className="view-deck-container">
      <h1 className="title">{currentDeck.title}</h1>
      {currentDeck.teacher_id === currentTeacher.id ? (
        <button 
        onClick={toggleFlashcardForm} 
        className='minty-button'
        >Add FlashCard
        </button>
      ) : (
        null
      )}
      
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

export default withRouter(ViewDeck);
