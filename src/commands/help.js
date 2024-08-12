const help = (command, state) => {
    let textArr = state.text;
    let inventoryArr = state.inventory;
    let commandList = "Available commands: go (+ north, east, south, or west), open (+ [item]), read (+ [item]), take (+ [item]), use (+ [item]), save, load, sound (turns on or off keyboard sound effects)";
    let inventoryList = [];
    let response = null
    if (inventoryArr.length === 0) {
        response = <div className="response"><p>{commandList}</p><p>Current inventory: empty</p><p>Current location: {state.place.name} - {state.place.description}</p></div>;
    } else {
        for (let i = 0; i < inventoryArr.length; i++) {
            inventoryList.push(inventoryArr[i].id);
        }
        response = <div className="response"><p>{commandList}</p><p>Current inventory: {inventoryList}</p><p>Current location: {state.place.name} - {state.place.description}</p></div>;
    }
    textArr.push(response);
    return { text: textArr };
}

export default help