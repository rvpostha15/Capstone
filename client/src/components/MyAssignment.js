import { useSelector, useDispatch } from "react-redux";
import { setCurrentDeck } from '../store/slices/deckSlice';
import { setFlashcards } from '../store/slices/flashcardSlice';

function MyAssignment({assignment}) {
    const dispatch = useDispatch();
    const decks = useSelector((state) => state.deck.decks);
    const deck = decks.find((deck) => deck.id === assignment.deck_id)

    const complete = assignment.complete

    const handleClick = (e) => {
        dispatch(setCurrentDeck(deck));
        dispatch(setFlashcards(deck.flashcards));
    };

    return(
        <div onClick={handleClick} >
            {complete ? (
                <div className="assignment complete">
                    <h1>{deck.title}</h1>
                    <h2>Complete</h2>
                </div>
            ) : (
                <div className="assignment incomplete">
                    <h1>{deck.title}</h1>
                    <h2>Incomplete</h2>
                </div>
            )}
        </div>
    )
}

export default MyAssignment