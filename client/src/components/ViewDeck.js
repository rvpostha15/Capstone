import Flashcard from "./Flashcard"
import '../css/ViewDeck.css';

function ViewDeck({ currentDeck }) {
    const {title, flashcards} = currentDeck

    const flashcardList = flashcards.map((flashcard)=>(
        <Flashcard
            key = {flashcard.id}
            flashcard = {flashcard}
        />
    ))
    

    return(
        <div className="view-deck-container">
            <div className="title">{title}</div> 
        {flashcardList}
        </div>
    )
}

export default ViewDeck