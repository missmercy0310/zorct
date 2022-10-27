const take = (command, state) => {
    if (command[1] === 'letter' && !command[2] && state.location[0] === "West of House") {
        let textArr = state.text;
        textArr.push(<div className="response"><p>Letter added to inventory.</p></div>);
        let inventoryArr = state.inventory;
        inventoryArr.push("letter")
        return { text: textArr, inventory: inventoryArr };
    } else {
        let textArr = state.text;
        textArr.push(<div className="response"><p>I don't know the word "{command[1]}"</p></div>);
        return { text: textArr };
    }
}

export default take