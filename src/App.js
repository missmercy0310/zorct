import React from 'react';

/* === Variables === */

let sound = true;
let location = "West of House"
let score = 0;
let moves = 0;
let copy = <div className="copy"><p>Croak</p><p>Copyright (c) 2022 Mar Mercy. All rights reserved.</p><p>Revision 00</p></div>;
let start = <div className="start"><p>West of House</p><p>You are standing in an open field west of a white house, with a boarded front door.</p><p>There is a small mailbox here.</p></div>;
let text = [copy,start];
let typing = [];

/* === Components === */

function App() {
  return (
    <div className="App">
        <div className="banner">
            <div className="location-half">
                <Location location={location} />
            </div>
            <div className="stats-half">
                <div className="stats">
                    <div className="score-section">
                        <p>Score :</p>
                        <Score score={score} />
                    </div>
                    <div className="moves-section">
                        <p>Moves :</p>
                        <Moves moves={moves} />
                    </div>
                </div>
            </div>
        </div>
        <Screen text={text} typing={typing} />
    </div>
  );
}

function Location(props) {
    return (
        <div className="location">
            <p>{props.location}</p>
        </div>
    );
}

function Score(props) {
    return (
        <div className="score">
            <p>{props.score}</p>
        </div>
    );
}

function Moves(props) {
    return (
        <div className="moves">
            <p>{props.moves}</p>
        </div>
    );
}

class Screen extends React.Component {
    constructor (props) {
        super (props);
        this.state = {typing: '', text: text.map((item, index) =>
            <div key={index}>{item}</div>
        )}
    }

    handleChange(e) {
        let k = (e.key);
        if (k === "Tab" ||
        k === "CapsLock" ||
        k === "Shift" ||
        k === "Control" ||
        k === "Alt" ||
        k === "Escape") {
            
        } else if (k === "Backspace") {
            typing.pop();
            this.setState({typing: typing.join('')});
        } else if (k === "Enter") {
            text.push(<p class="typed">{'>'}{typing.join('')}</p>)
            typing = [];
            this.setState({typing: '', text: text.map((item, index) =>
                <div key={index}>{item}</div>
            )});
        } else if (k) {
            typing.push(`${k}`);
            this.setState({typing: typing.join('')});
        }
    }

    // TODO Update componentWillMount to componentDidMount

    componentWillMount() {
        window.addEventListener('keydown', this.handleChange.bind(this));
    }

    render() {
        return (
            <div className="screen">
                <div className="screen-inner">
                    <Text text={this.state.text} />
                    <div className="term">
                        <p className="arrow">{">"}</p>
                        <Typing typing={this.state.typing} />
                        <Cursor />
                    </div>
                </div>
            </div>
        );
    }
}

class Text extends React.Component {
    render() {
        return (
            <div className="text">{this.props.text}</div>
        );
    }
}

class Typing extends React.Component {
    render() {
        return (
            <div className="typing">
                <p>{this.props.typing}</p>
            </div>
        );
    }
}

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
        console.log(this.state.count)
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

/* === Event Listeners === */

window.addEventListener("keyup", function() {
    let audio = new Audio(`Thocks/Thock${Math.floor(Math.random() * 8)}.mp3`);
    if (sound) {
        audio.play();
    }
});

export default App;