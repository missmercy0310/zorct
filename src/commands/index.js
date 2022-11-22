import sound from "./sound"
import open from "./open"
import take from "./take"
import go from "./go"

const commands = (command, state) => {
    if (command[0]) {
        if (command[0] === 'sound') {
            return sound(command, state);
        } else if (command[0] === 'open') {
            return open(command, state);
        } else if (command[0] === 'take') {
            return take(command, state);
        } else if (command[0] === 'go') {
            return go(command, state);
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