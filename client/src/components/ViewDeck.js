import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setDecks, setCurrentDeck, deleteDeck } from '../store/slices/deckSlice'
import { setFlashcards } from '../store/slices/flashcardSlice';
import Flashcard from './Flashcard';
import '../css/ViewDeck.css';
import NewFlashcard from './NewFlashcard';

function ViewDeck(props) {
  const decks = useSelector((state) => state.deck.decks);
  const currentDeck = useSelector((state) => state.deck.currentDeck);
  const flashcards = useSelector((state) => state.flashcard.flashcards);
  const dispatch = useDispatch();
  const currentTeacher = useSelector((state) => state.teacher.currentTeacher);
  const [newFlashcard, setNewFlashcard] = useState(false);
  const [isSure, setIsSure] = useState(false);

  useEffect(() => {
    const fetchDeckData = async () => {
      try {
        const response = await fetch(`/decks/${currentDeck.id}`);
        const data = await response.json();

        // Update the current deck and flashcards in the state
        dispatch(setCurrentDeck(data));
        dispatch(setFlashcards(data.flashcards));
      } catch (error) {
        console.error('Error fetching deck data:', error);
      }
    };

    if (currentDeck.id) {
      fetchDeckData();
    }
  }, [currentDeck.id, dispatch]);

  const flashcardList = flashcards.map((flashcard) => (
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
          Are you sure you would like to delete this deck?
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