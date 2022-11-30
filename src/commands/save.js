const save = (command, state) => {
    let textArr = state.text;
    localStorage.setItem('hellscapeSaveState', JSON.stringify(state));
    textArr.push(<div className="response"><p>Game saved to local storage.</p></div>);
    return { text: textArr };
}

export default save