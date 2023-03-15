

function Flashcard({ flashcard }) {
    const { front, back, id } = flashcard

    return(
        <>
            <h1>{front}</h1>
            <h2>{back}</h2>
        </>
    )
}

export default Flashcard