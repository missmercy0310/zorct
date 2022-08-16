import React from "react";

function Typing(props) {
    return (
        <div className="typing">
            <p>{props.typing.join('')}</p>
        </div>
    );
}

export default Typing;