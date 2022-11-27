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

const forestWest = new Location("forestWest");
forestWest.name = "Western Forest";
forestWest.description = "You are in the western end of a forest.";

const forestEast = new Location("forestEast");
forestEast.name = "Eastern Forest";
forestEast.description = "You are in the eastern end of a forest.";

const northOfHouse = new Location("northOfHouse");
northOfHouse.name = "North of House";
northOfHouse.description = "You are standing in an open field north of a white house. There is a window on this side of the house.";

// Middle map

const swampNorth = new Location("swampNorth");
swampNorth.name = "Northern Swamp";
swampNorth.description = "You are wading through the northern portion of a swamp. The frogs croak, and the water bubbles.";

const westOfHouse = new Location("westOfHouse");
westOfHouse.name = "West of House";
westOfHouse.description = "You are standing in an open field west of a white house, with a boarded front door. There is a small mailbox here.";
westOfHouse.things = [{
    id: "letter",
    takable: true,
    taken: false,
    openable: false,
    opened: null,
    readable: true,
    read: <div className="response letter">
        <div><p>The letter reads as follows:</p></div>
        <div>
            <p>Welcome to Hell!</p>
            <p>You have been sent here for misuse of the word "multitudinous." Have a look around!</p>
            <p>Yours truly,</p>
            <p>P.Code</p>
        </div>
        <div><p>This concludes the letter.</p></div>
    </div>
},
{
    id: "mailbox",
    takable: false,
    taken: null,
    openable: true,
    opened: <div className="response"><p>There is a letter in the mailbox.</p></div>,
    readable: true,
    read: <div className="response"><p>The mailbox is labeled. The label reads "666 Hell St."</p></div>
}];

const house = new Location("house");
house.name = "Inside House";
house.description = "How did you get in my house?";

// Southern map

const swampSouth = new Location("swampSouth");
swampSouth.name = "Southern Swamp";
swampSouth.description = "You are wading through the southern portion of a swamp. The frogs don't croak here.";

const field = new Location("field");
field.name = "An Empty Field";
field.description = "You are standing in an empty field. The grass sways, and the wind blows.";

const southOfHouse = new Location("southOfHouse");
southOfHouse.name = "South of House";
southOfHouse.description = "You are standing in an open field south of a white house. There is a window on this side of the house.";

export {forestWest, forestEast, northOfHouse, swampNorth, westOfHouse, house, swampSouth, field, southOfHouse}