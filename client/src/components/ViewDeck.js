import Flashcard from "./Flashcard"

function ViewDeck({ currentDeck }) {
    const {title, flashcards} = currentDeck

    const flashcard = flashcards.map((flashcard)=>(
        <Flashcard
            key = {flashcard.id}
            flashcard = {flashcard}
        />
    ))
    

    return( 
        <h1>{flashcard}</h1>
    )
}

export default ViewDeck