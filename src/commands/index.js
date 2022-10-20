import sound from "./sound"

const commands = (command, state) => {
    if (command[0]) {
        if (command[0] === 'sound') {
            return sound(command);
        } else {
            let textArr = state.text;
            textArr.push(<div className="response"><p>I don't know the word "{command[0]}"</p></div>);
            return { text: textArr };
        }
    } else {
        let textArr = state.text;
        textArr.push(<div className="response"><p>I beg your pardon?</p></div>);
        return { text: textArr };
    }
}

export default commands;