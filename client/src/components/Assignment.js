import React from "react";
import { useSelector } from "react-redux";
import "../css/MintyTheme.css";

function Assignment({ assignment }) {
    const { complete, deck_id } = assignment;
    
    // Find the Title of the Deck Where Deck.id matches Deck_id
    const decks = useSelector((state) => state.deck.decks);
    const deck = decks.find((deck) => deck.id === deck_id);
    const deckTitle = deck ? deck.title : null

    return (
            <div className={`assignment ${complete ? "complete" : "incomplete"}`}>
            <h1 className="minty-text">{deckTitle}</h1>
            {complete ? (
                <div>
                <p className="minty-text">
                    Assignment Complete <span className="minty-highlight checkmark">&#10003;</span>
                </p>
                </div>
            ) : (
                <div>
                    <p className="minty-text">
                        Incomplete Assignment
                    </p>
                </div>
            )}
            </div>
    );
}

export default Assignment;
