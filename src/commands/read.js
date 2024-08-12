const read = (command, state) => {
    let textArr = state.text;
    let response = <div className="response"><p>You can't read that.</p></div>;
    for (let i = 0; i < state.inventory.length; i++) {
        if (command[1] === state.inventory[i].id && state.inventory[i].readable) {
            response = state.inventory[i].read;
        } 
    }
    for (let j = 0; j < state.place.things.length; j++) {
        if (command[1] === state.place.things[j].id && state.place.things[j].readable) {
            response = state.place.things[j].read;
        }
    }

    
    textArr.push(response);
    return { text: textArr };
}

export default read