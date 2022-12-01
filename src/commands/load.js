const load = (command, state) => {
    let textArr = state.text;
    let saveState = JSON.parse(localStorage.getItem('hellscapeSaveState'));
    console.log(saveState);
    textArr.push(<div className="response"><p>Game loaded from local storage.</p><p>{saveState.place.name}</p><p>{saveState.place.description}</p></div>);
    return { sound: saveState.sound, place: saveState.place, score: saveState.score, moves: saveState.moves, inventory: saveState.inventory, text: textArr };
}

export default load