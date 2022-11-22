import React from "react";

function Location(props) {
    return (
        <div className="location">
            <p>{props.location.name}</p>
        </div>
    );
}

export default Location;