const go = (command, state) => {
    let textArr = state.text;
    let movesNum = state.moves;
    let placeCopy = state.place;
    let response = <div className="response"><p>You can't go there.</p></div>;
    for (let i = 0; i < state.place.directions.length; i++) {
        if (command[1] === state.place.directions[i][0] && state.place.directions[i][1]) {
            for (let j = 0; j < state.map.length; j++) {
                if (state.place.directions[i][1] === state.map[j].varName) {
                    response = <div className="response"><p>{state.map[j].name}</p><p>{state.map[j].description}</p></div>;
                    movesNum += 1;
                    placeCopy = state.map[j];
                }
            }
        }
    }
    textArr.push(response);
    return { text: textArr, moves: movesNum, place: placeCopy };
}

export default go