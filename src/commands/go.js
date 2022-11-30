const go = (command, state) => {
    let textArr = state.text;
    let movesNum = state.moves;
    let placeCopy = state.place;
    let response = <div className="response"><p>You can't go there.</p></div>;
    for (let i = 0; i < state.place.directions.length; i++) {
        if (command[1] === state.place.directions[i][0] && state.place.directions[i][1]) {
            response = <div className="response"><p>{state.place.directions[i][1].name}</p><p>{state.place.directions[i][1].description}</p></div>;
            movesNum += 1;
            placeCopy = state.place.directions[i][1];
        }
    }
    textArr.push(response);
    return { text: textArr, moves: movesNum, place: placeCopy };
}

export default go