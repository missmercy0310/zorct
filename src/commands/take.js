const take = (command, state) => {
    let textArr = state.text;
    let inventoryArr = state.inventory;
    let loc = state.location;
    let response = <div className="response"><p>You can't take that.</p></div>;
    for (let i = 0; i < state.location.things.length; i++) {
        if (command[1] === state.location.things[i].id && state.location.things[i].takable && state.location.things[i].taken === false) {
            response = <div className="response"><p>{state.location.things[i].id} added to inventory.</p></div>;
            inventoryArr.push(state.location.things[i][0]);
            loc.things[i].taken = true;
        }
    }
    textArr.push(response);
    return { text: textArr, inventory: inventoryArr, location: loc };
}

export default take