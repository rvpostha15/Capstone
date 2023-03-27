import { useSelector } from 'react-redux';
import { useState } from 'react';
// import "./css/ViewDeck.css";

function StudyFlashcard({flashcard}) {
    const currentDeck = useSelector((state) => state.deck.currentDeck);
    const {front, back} = flashcard

    const [isFront, setIsFront] = useState(true)

    const toggleFlip = () => {
        setIsFront(!isFront)
    }

    return(
        <div className='flashcard'>
            {isFront ? (
                <div className='front'>
                    <h2>{front}</h2>
                    <button onClick={toggleFlip} className='minty-button'>Answer</button>
                </div>
            ) : (
                <div className='study'>
                    <h2 >{back}</h2>
                    <button onClick={toggleFlip} className='minty-button'>Front</button>
                </div>
            )}
        </div>
    )
}

export default StudyFlashcard