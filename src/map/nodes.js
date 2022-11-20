import Node from ".";

const forestWest = new Node("Western Forest");

const forestEast = new Node("Eastern Forest");

const northOfHouse = new Node("North of House");



const swampNorth = new Node("Northern Swamp");

const westOfHouse = new Node("West of House");
westOfHouse.things = [["mailbox", "closed"],["letter", "untaken"]];

const house = new Node("Inside House");



const swampSouth = new Node("Southern Swamp");

const field = new Node("Empty Field");

const southOfHouse = new Node("South of House");

export {forestWest, forestEast, northOfHouse, swampNorth, westOfHouse, house, swampSouth, field, southOfHouse}