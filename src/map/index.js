import forestWest from "./forestWest";
import forestEast from "./forestEast";
import northOfHouse from "./northOfHouse";
import swampNorth from "./swampNorth";
import westOfHouse from "./westOfHouse";
import house from "./house";
import swampSouth from "./swampSouth";
import field from "./field";
import southOfHouse from "./southOfHouse";

// Northern map

// forestWest exits
forestWest.addExit("e", forestEast);
forestWest.addExit("se", westOfHouse);
forestWest.addExit("s", swampNorth);

// forestEast exits
forestEast.addExit("e", northOfHouse);
forestEast.addExit("s", westOfHouse);
forestEast.addExit("sw", swampNorth);
forestEast.addExit("w", forestWest);

// northOfHouse exits
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
westOfHouse.addExit("se", southOfHouse);
westOfHouse.addExit("s", field);
westOfHouse.addExit("sw", swampSouth);
westOfHouse.addExit("w", swampNorth);
westOfHouse.addExit("nw", forestWest);

// house exits
house.addExit("w", westOfHouse);

// Southern map

// swampSouth exits
swampSouth.addExit("n", swampNorth);
swampSouth.addExit("ne", westOfHouse);
swampSouth.addExit("e", field);

// field exits
field.addExit("n", westOfHouse);
field.addExit("e", southOfHouse);
field.addExit("w", swampSouth);
field.addExit("nw", swampNorth);

// southOfHouse exits
southOfHouse.addExit("w", field);
southOfHouse.addExit("nw", westOfHouse);

export { forestWest, forestEast, northOfHouse, swampNorth, westOfHouse, house, swampSouth, field, southOfHouse }