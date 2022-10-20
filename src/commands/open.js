const open = (command, state) => {
    if (command[1] === 'mailbox' && !command[2]) {
        let textArr = state.text;
        textArr.push(<div className="response"><p>There is a letter in the mailbox.</p></div>);
        return { text: textArr };
    } else if (command[1] === 'letter' && !command[2]) {
        let textArr = state.text;
        textArr.push(<div className="response">
            <div><p>The letter reads as follows:</p></div>
            <div><p>Welcome to Hell!</p>
            <p>You have been sent here for misuse of the word "multitudinous." Have a look around!</p>
            <p>- M.T. Tomb</p></div>
            <div><p>This concludes the letter.</p></div>
        </div>);
        return { text: textArr };
    } else {
        let textArr = state.text;
        textArr.push(<div className="response"><p>I don't know the word "{command[1]}"</p></div>);
        return { text: textArr };
    }
}

export default open