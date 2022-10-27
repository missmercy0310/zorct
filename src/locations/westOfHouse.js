const westOfHouse = (state) => {
    let locationArr = state.location;
    locationArr[1] = ["mailbox", "closed"];
    locationArr[2] = ["letter", "untaken"];
    locationArr[3] = ["",""];
    locationArr[4] = ["",""];
    locationArr[5] = ["",""];
    return { location: locationArr }
}

export default westOfHouse