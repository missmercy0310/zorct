const go = (command, state) => {
    if (command[1] === 'north' && !command[2]) {
        let textArr = state.text;
        textArr.push(<div className="response"><p>{state.place.n.name}</p><p>{state.place.n.description}</p></div>);
        return { text: textArr, moves: state.moves += 1, place: state.place.n };
    } else if (command[1] === 'south' && !command[2]) {
        let textArr = state.text;
        textArr.push(<div className="response"><p>{state.place.s.name}</p><p>{state.place.s.description}</p></div>);
        return { text: textArr, moves: state.moves += 1, place: state.place.s };
    }
}

export default go