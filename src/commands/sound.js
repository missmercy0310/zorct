const sound = (command) => {
    if (command[1] === 'on' && !command[2]) {
        return {sound: true};
    } else if (command[1] === 'off' && !command[2]) {
        return {sound: false};
    }
}

export default sound