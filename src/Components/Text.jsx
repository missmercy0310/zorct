import React from "react";

function Text(props) {
    return (
        <div className="text">{props.text.map((item, index) =>
            <div key={index}>{item}</div>
        )}</div>
    );
}

export default Text;