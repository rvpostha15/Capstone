

function Flashcard({ flashcard }) {
    const { front, back, id } = flashcard

    return (
        <div className="flashcard">
            <div className="front">{front}</div>
            <div className="back">{back}</div>
        </div>
    );
}

export default Flashcard