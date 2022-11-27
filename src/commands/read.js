const read = (command, state) => {
    let textArr = state.text;
    let response = <div className="response"><p>You can't read that.</p></div>;
    for (let i = 0; i < state.location.things.length; i++) {
        if (command[1] === state.location.things[i].id && state.location.things[i].readable) {
            response = state.location.things[i].read;
        }
    }
    textArr.push(response);
    return { text: textArr };
}

export default read