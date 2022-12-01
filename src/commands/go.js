import { forestWest, forestEast, northOfHouse, swampNorth, westOfHouse, house, swampSouth, field, southOfHouse } from "../map";

const go = (command, state) => {
    let textArr = state.text;
    let movesNum = state.moves;
    let placeCopy = state.place;
    let response = <div className="response"><p>You can't go there.</p></div>;
    for (let i = 0; i < state.place.directions.length; i++) {
        if (command[1] === state.place.directions[i][0] && state.place.directions[i][1]) {
            let placesArr = [forestWest, forestEast, northOfHouse, swampNorth, westOfHouse, house, swampSouth, field, southOfHouse];
            for (let j = 0; j < placesArr.length; j++) {
                if (state.place.directions[i][1] === placesArr[j].varName) {
                    response = <div className="response"><p>{placesArr[j].name}</p><p>{placesArr[j].description}</p></div>;
                    movesNum += 1;
                    placeCopy = placesArr[j];
                }
            }
        }
    }
    textArr.push(response);
    return { text: textArr, moves: movesNum, place: placeCopy };
}

export default go