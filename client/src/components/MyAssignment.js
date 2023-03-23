import { useSelector } from "react-redux";

function MyAssignment({assignment}) {
    const decks = useSelector((state) => state.deck.decks);
    const deck = decks.find((deck) => deck.id === assignment.deck_id)

    const complete = assignment.complete
    // console.log("complete", complete)

    return(
        <>
            {complete ? (
                <div className="assignment complete">
                    <h1>{deck.title}</h1>
                    <h2>Complete</h2>
                </div>
            ) : (
                <div className="assignment">
                    <h1>{deck.title}</h1>
                    <h2>Incomplete</h2>
                </div>
            )}
        </>
    )
}

export default MyAssignment