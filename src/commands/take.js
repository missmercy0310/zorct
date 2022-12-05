const take = (command, state) => {
    let textArr = state.text;
    let inventoryArr = state.inventory;
    let placeCopy = state.place;
    let mapCopy = state.map;
    let response = <div className="response"><p>You can't take that.</p></div>;
    for (let i = 0; i < placeCopy.things.length; i++) {
        if (command[1] === placeCopy.things[i].id && placeCopy.things[i].takable && placeCopy.things[i].taken === false) {
            response = <div className="response"><p>{placeCopy.things[i].id} added to inventory.</p></div>;
            inventoryArr.push(placeCopy.things[i]);
            placeCopy.things[i].taken = true;
            for (let j = 0; j < mapCopy.length; j++) {
                if (placeCopy.varName === mapCopy[j].varName) {
                    mapCopy[j] = placeCopy;
                }
            }
        }
    }
    textArr.push(response);
    return { text: textArr, inventory: inventoryArr, place: placeCopy, map: mapCopy };
}

export default take