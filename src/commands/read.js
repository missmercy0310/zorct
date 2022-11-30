const read = (command, state) => {
    let textArr = state.text;
    let response = <div className="response"><p>You can't read that.</p></div>;
    for (let i = 0; i < state.place.things.length; i++) {
        if (command[1] === state.place.things[i].id && state.place.things[i].readable) {
            response = state.place.things[i].read;
        }
    }
    textArr.push(response);
    return { text: textArr };
}

export default read