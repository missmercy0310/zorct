const sound = (command, state) => {
    if (command[1] === 'on' && !command[2]) {
        return {sound: true};
    } else if (command[1] === 'off' && !command[2]) {
        return {sound: false};
    } else {
        let textArr = state.text;
        textArr.push(<div className="response"><p>I don't know the word "{command[1]}"</p></div>);
        return { text: textArr };
    }
}

export default sound