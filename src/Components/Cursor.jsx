import React from "react";

class Cursor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, cursor: false};
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            200
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        if (this.state.count === 0) {
            this.setState({
                cursor: false,
                count: this.state.count + 1
            });
        } else if (this.state.count === 1) {
            this.setState({
                cursor: true,
                count: 0
            });
        };
    }

    render() {
        let p
        if (this.state.cursor) {
            p = <p>_</p>
        } else {
            p = <p></p>
        }
        return (
            <div className='cursor'>
                {p}
            </div>
        )
    }
}

export default Cursor;