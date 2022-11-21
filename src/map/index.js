import {forestWest, forestEast, northOfHouse, swampNorth, westOfHouse, house, swampSouth, field, southOfHouse} from "./locations"

class Location {
    constructor(varName) {
        this.varName = varName;
        this.name = "";
        this.description = "";
        this.things = [];
    }

    addExit(direction, exit) {
        switch (direction) {
            case "n":
                this.n = exit;
                break;
            case "ne":
                this.ne = exit;
                break;
            case "e":
                this.e = exit;
                break;
            case "se":
                this.se = exit;
                break;
            case "s":
                this.s = exit;
                break;
            case "sw":
                this.sw = exit;
                break;
            case "w":
                this.w = exit;
                break;
            case "nw":
                this.nw = exit;
                break;
            default:
                break;
        }
    }

    printExits() {
        return(this.n, this.ne, this.e, this.se, this.s, this.sw, this.w, this.nw);
    }

    printThings() {
        return(this.things);
    }
}

// Northern map

// forestWest exits
forestWest.addExit("e", forestEast);
forestWest.addExit("se", westOfHouse);
forestWest.addExit("s", swampNorth);

// forestEast exits
forestEast.addExit("e", northOfHouse);
forestEast.addExit("se", house);
forestEast.addExit("s", westOfHouse);
forestEast.addExit("sw", swampNorth);
forestEast.addExit("w", forestWest);

// northOfHouse exits
northOfHouse.addExit("s", house);
northOfHouse.addExit("sw", westOfHouse);
northOfHouse.addExit("w", forestEast);

// Middle map

// swampNorth exits
swampNorth.addExit("n", forestWest);
swampNorth.addExit("ne", forestEast);
swampNorth.addExit("e", westOfHouse);
swampNorth.addExit("se", field);
swampNorth.addExit("s", swampSouth);

// westOfHouse exits
westOfHouse.addExit("n", forestEast);
westOfHouse.addExit("ne", northOfHouse);
westOfHouse.addExit("e", house);
westOfHouse.addExit("se", southOfHouse);
westOfHouse.addExit("s", field);
westOfHouse.addExit("sw", swampSouth);
westOfHouse.addExit("w", swampNorth);
westOfHouse.addExit("nw", forestWest);

// house exits
house.addExit("n", northOfHouse);
house.addExit("s", southOfHouse);
house.addExit("sw", field);
house.addExit("w", westOfHouse);
house.addExit("nw", forestEast);

// Southern map

// swampSouth exits
swampSouth.addExit("n", swampNorth);
swampSouth.addExit("ne", westOfHouse);
swampSouth.addExit("e", field);

// field exits
field.addExit("n", westOfHouse);
field.addExit("ne", house);
field.addExit("e", southOfHouse);
field.addExit("w", swampSouth);
field.addExit("nw", swampNorth);

// southOfHouse exits
southOfHouse.addExit("n", house);
southOfHouse.addExit("w", field);
southOfHouse.addExit("nw", westOfHouse);

console.log(westOfHouse.printExits());

export {Location};