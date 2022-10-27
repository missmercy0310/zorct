import westOfHouse from "./westOfHouse"

const locations = (location, state) => {
    if (location === "West of House") {
        return westOfHouse(state)
    }
}

export default locations;