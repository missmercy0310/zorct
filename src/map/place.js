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
                this.directions[0].push(exit);
                break;
            case "ne":
                this.directions[1].push(exit);
                break;
            case "e":
                this.directions[2].push(exit);
                break;
            case "se":
                this.directions[3].push(exit);
                break;
            case "s":
                this.directions[4].push(exit);
                break;
            case "sw":
                this.directions[5].push(exit);
                break;
            case "w":
                this.directions[6].push(exit);
                break;
            case "nw":
                this.directions[7].push(exit);
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