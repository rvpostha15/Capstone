import { useSelector } from 'react-redux';
import { useState } from 'react';

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
                <div>
                    <h2 className='front'>{front}</h2>
                    <button onClick={toggleFlip} className='minty-button'>See Back</button>
                </div>
            ) : (
                <div>
                    <h2 className='back'>{back}</h2>
                    <button onClick={toggleFlip} className='minty-button'>See Front</button>
                </div>
            )}
        </div>
    )
}

export default StudyFlashcard