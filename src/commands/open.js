const open = (command, state) => {
    let textArr = state.text;
    let response = <div className="response"><p>You can't open that.</p></div>;
    for (let i = 0; i < state.location.things.length; i++) {
        if (command[1] === state.location.things[i].id && state.location.things[i].openable) {
            response = state.location.things[i].opened;
        }
    }
    textArr.push(response);
    return { text: textArr };
}

export default open