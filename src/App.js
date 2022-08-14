import React from 'react';

/* === Variables === */

let sound = true;
let location = "West of House"
let score = 0;
let moves = 0;
let copy = <div className="copy"><p className='title'>Hellscape</p><p>Copyright (c) 2022 Mar Mercy. All rights reserved.</p><p>Revision 00</p></div>;
let welcome = <div className='welcome'><p>You have been sent to Hell for misuse of the word "multitudinous." Have a look around.</p></div>
let start = <div className="start"><p>West of House</p><p>You are standing in an open field west of a white house, with a boarded front door.</p><p>There is a small mailbox here.</p></div>;
let text = [copy, welcome, start];
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
                <Stats score={score} moves={moves} />
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

// function Stats(props) {
//     const [scoreCount, setScore] = React.useState(props.score);
//     const [movesCount, setMoves] = React.useState(props.moves);

//     const setStats = () => {
//         setScore(score);
//         setMoves(moves);
//     }

//     React.useEffect(() => {
//         setScore(score);
//         setMoves(moves);
//     }, [props.score, props.moves]);

//     return (
        // <div className="stats">
        //     <div className="score-section">
        //         <p>Score :</p>
        //         <Score score={score} />
        //     </div>
        //     <div className="moves-section">
        //         <p>Moves :</p>
        //         <Moves moves={score} />
        //     </div>
        // </div>
//     );
// }

class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {scoreCount: this.props.score, movesCount: this.props.moves}
    }

    componentDidMount() {
        this.setState({
            scoreCount: this.props.score,
            movesCount: this.props.moves
        });
    }

    render() {
        return (
            <div className="stats">
            <div className="score-section">
                <p>Score :</p>
                <Score score={this.state.scoreCount} />
            </div>
            <div className="moves-section">
                <p>Moves :</p>
                <Moves moves={this.state.movesCount} />
            </div>
        </div>
        )
    }
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

const checkCommand = (command) => {
    if (command[0] === 'sound') {
        if (command[1] === 'on') {
            sound = true;
            moves += 1;
            console.log(moves);
        } else if (command[1] === 'off') {
            sound = false;
        }
    } else {
        text.push(<div className="response"><p>I don't know the word "{command[0]}"</p></div>);
    }
}

const Screen = (props) => {
    const [screenTyping, setTyping] = React.useState('');
    const [screenText, setText] = React.useState(props.text.map((item, index) =>
        <div key={index}>{item}</div>
    ));

    const handleKeyDown = (e) => {
        let k = (e.keyCode ? e.keyCode : e.which);
        if (k === 9 ||
        k === 16 ||
        k === 17 ||
        k === 18 ||
        k === 19 ||
        k === 20 ||
        k === 27) {
            
        } else if (k === 8) {
            typing.pop();
            setTyping(typing.join(''));
        } else if (k === 13) {
            text.push(<p className="typed">{'>'}{typing.join('')}</p>)
            let command  = typing.join('').split(' ');
            checkCommand(command);
            typing = [];
            setTyping('')
            setText(text.map((item, index) =>
                <div key={index}>{item}</div>
            ));
        } else if (e.key) {
            typing.push(`${e.key}`);
            setTyping(typing.join(''));
        }
    };
  
    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });
  
    return (
        <div className="screen">
            <div className="screen-inner">
                <Text text={screenText} />
                <div className="term">
                    <p className="arrow">{">"}</p>
                    <Typing typing={screenTyping} />
                    <Cursor />
                </div>
            </div>
        </div>
    );
};

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