import { MdDeleteForever } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFlashcard } from '../store/slices/deckSlice'

function Flashcard({ flashcard }) {
    const currentDeck = useSelector((state) => state.deck.currentDeck);
    const currentTeacher = useSelector((state) => state.teacher.currentTeacher);
    const dispatch = useDispatch();
    const { front, back, id } = flashcard

    const handleDeleteFlashcard = () => {
        const deckId = flashcard.deck_id;
        const flashcardId = flashcard.id;
        dispatch(deleteFlashcard({ deckId, flashcardId }));
        console.log('deleteFlashcard action dispatched');
    };

    return (
        <div className="flashcard">
            <div className="front">{front}</div>
            <div className="back">{back}</div>
            {currentDeck.teacher_id === currentTeacher.id ? (
                <h1 
                    className="tiny-minty-delete-button"
                    onClick={handleDeleteFlashcard}
                ><MdDeleteForever/></h1>
            ) : ( null
            )}
            
        </div>
    );
}

export default Flashcard