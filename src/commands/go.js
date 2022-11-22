const go = (command, state) => {
    if (command[1] === 'north' && !command[2]) {
        let textArr = state.text;
        textArr.push(<div className="response"><p>{state.location.n.name}</p><p>{state.location.n.description}</p></div>);
        let movesNum = state.moves;
        movesNum += 1;
        let current = state.location;
        current = state.location.n;
        return { text: textArr, moves: movesNum, location: current }
    }
}

export default go