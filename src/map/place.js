class Place {
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

export default Place