import React from "react";

function Location(props) {
    return (
        <div className="location">
            <p>{props.location[1]}</p>
        </div>
    );
}

export default Location;