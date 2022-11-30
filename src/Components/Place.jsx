import React from "react";

function Place(props) {
    return (
        <div className="place">
            <p>{props.place.name}</p>
        </div>
    );
}

export default Place;