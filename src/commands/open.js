const open = (command, state) => {
    let textArr = state.text;
    let response = <div className="response"><p>You can't open that.</p></div>;
    for (let i = 0; i < state.place.things.length; i++) {
        if (command[1] === state.place.things[i].id && state.place.things[i].openable) {
            response = state.place.things[i].opened;
        }
    }
    textArr.push(response);
    return { text: textArr };
}

export default open