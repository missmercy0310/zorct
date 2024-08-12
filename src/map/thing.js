class Thing {
    constructor(id) {
        this.id = id;
        this.takable = false;
        this.taken = false;
        this.openable = false;
        this.open = null;
        this.readable = false;
        this.read = null;
        this.usable = false;
        this.use = null;
    }
}

export default Thing