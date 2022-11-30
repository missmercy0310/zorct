const take = (command, state) => {
    let textArr = state.text;
    let inventoryArr = state.inventory;
    let loc = state.place;
    let response = <div className="response"><p>You can't take that.</p></div>;
    for (let i = 0; i < state.place.things.length; i++) {
        if (command[1] === state.place.things[i].id && state.place.things[i].takable && state.place.things[i].taken === false) {
            response = <div className="response"><p>{state.place.things[i].id} added to inventory.</p></div>;
            inventoryArr.push(state.place.things[i][0]);
            loc.things[i].taken = true;
        }
    }
    textArr.push(response);
    return { text: textArr, inventory: inventoryArr, place: loc };
}

export default take