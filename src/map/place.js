class Place {
    constructor(varName) {
        this.varName = varName;
        this.name = "";
        this.description = "";
        this.things = [];
        this.directions = [["north"],["northeast"],["east"],["southeast"],["south"],["southwest"],["west"],["northwest"]]
    }

    addExit(direction, exit) {
        switch (direction) {
            case "n":
                this.directions[0].push(exit.varName);
                break;
            case "ne":
                this.directions[1].push(exit.varName);
                break;
            case "e":
                this.directions[2].push(exit.varName);
                break;
            case "se":
                this.directions[3].push(exit.varName);
                break;
            case "s":
                this.directions[4].push(exit.varName);
                break;
            case "sw":
                this.directions[5].push(exit.varName);
                break;
            case "w":
                this.directions[6].push(exit.varName);
                break;
            case "nw":
                this.directions[7].push(exit.varName);
                break;
            default:
                break;
        }
    }

    printExits() {
        return(this.directions);
    }

    printThings() {
        return(this.things);
    }
}

export default Place