import { MdDeleteForever, MdOutlineEdit } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFlashcard } from '../store/slices/flashcardSlice'
import { Link } from 'react-router-dom';
import { setCurrentFlashcard } from '../store/slices/flashcardSlice';

function Flashcard({ flashcard }) {
    const currentDeck = useSelector((state) => state.deck.currentDeck);
    const currentTeacher = useSelector((state) => state.teacher.currentTeacher);
    const dispatch = useDispatch();
    const { front, back, id } = flashcard
    const currentFlashcard = useSelector((state) => state.flashcard.currentFlashcard);

    const handleDeleteFlashcard = () => {
        const deckId = flashcard.deck_id;
        const flashcardId = flashcard.id;
        dispatch(deleteFlashcard({ deckId, flashcardId }));
    };

    const handleCurrentFlashcard = () => {
        dispatch(setCurrentFlashcard(flashcard))
    };

    return (
        <div className="flashcard">
            <div className="front">{front}</div>
            <div className="back">{back}</div>
            {currentDeck.teacher_id === currentTeacher.id ? (
                <div>
                    <Link className='tiny-minty-edit-button' 
                        to={`/decks/${flashcard.deck_id}/flashcards/${flashcard.id}/edit`}
                        onClick={handleCurrentFlashcard}    
                    >
                        <MdOutlineEdit/>
                    </Link>
                    <h1 
                        className="tiny-minty-delete-button"
                        onClick={handleDeleteFlashcard}
                    >
                        <MdDeleteForever/>
                    </h1>
                </div>
            ) : ( null
            )}
            
        </div>
    );
}

export default Flashcard