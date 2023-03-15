import React from "react";
import "../css/MintyTheme.css";

function Assignment({ assignment }) {
    const { complete, deck_id } = assignment;
    return (
        <div className={`assignment ${complete ? "complete" : ""}`}>
        <h1 className="minty-text">{deck_id}</h1>
        {complete && (
            <div>
            <p className="minty-text">
                Assignment Complete <span className="minty-highlight">&#10003;</span>
            </p>
            </div>
        )}
        </div>
    );
}

export default Assignment;
