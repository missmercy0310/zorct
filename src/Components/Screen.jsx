import React from "react";
import Location from "./Location";
import Score from "./Score";
import Moves from "./Moves";
import Text from "./Text";
import Typing from "./Typing";
import Cursor from "./Cursor";

class Screen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sound: this.props.sound,
            location: this.props.location,
            score: this.props.score,
            moves: this.props.moves,
            text: this.props.text,
            typing: this.props.typing
        }

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.checkCommand = this.checkCommand.bind(this);
    }

    checkCommand = (command) => {
        if (command[0]) {
            if (command[0] === 'sound') {
                if (command[1] === 'on' && !command[2]) {
                    this.setState({sound: true});
                } else if (command[1] === 'off' && !command[2]) {
                    this.setState({sound: false});
                }
            } else {
                let textArr = this.state.text;
                textArr.push(<div className="response"><p>I don't know the word "{command[0]}"</p></div>);
                this.setState({text: textArr});
            }
        } else {
            let textArr = this.state.text;
            textArr.push(<div className="response"><p>I beg your pardon?</p></div>);
            this.setState({text: textArr});
        }
    }

    handleKeyUp = (e) => {
        let audio = new Audio(`Thocks/Thock${Math.floor(Math.random() * 8)}.mp3`);
        if (this.state.sound) {
            audio.play();
        }
    }

    handleKeyDown = (e) => {
        let k = (e.keyCode ? e.keyCode : e.which);
        if (k === 9 ||
        k === 16 ||
        k === 17 ||
        k === 18 ||
        k === 19 ||
        k === 20 ||
        k === 27) {
            
        } else if (k === 8) {
            let typingArr = this.state.typing;
            typingArr.pop();
            this.setState({typing: typingArr});
        } else if (k === 13) {
            let textArr = this.state.text;
            textArr.push(<p className="typed">{'>'}{
                this.state.typing.join('')
            }</p>);
            let command = this.state.typing.join('').split(' ');
            this.checkCommand(command);
            this.setState({
                typing: [],
                text: textArr
            });
        } else if (e.key) {
            let typingArr = this.state.typing;
            typingArr.push(`${e.key}`);
            this.setState({typing: typingArr});
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
    }

    render() {
        return (
            <div className='screen'>
                <div className="banner">
                    <div className="location-half">
                        <Location location={this.state.location} />
                    </div>
                    <div className="stats-half">
                        <div className="stats">
                            <div className="score-section">
                                <p>Score :</p>
                                <Score score={this.state.score} />
                            </div>
                            <div className="moves-section">
                                <p>Moves :</p>
                                <Moves moves={this.state.moves} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="screen-main">
                    <div className="screen-inner">
                        <Text text={this.state.text} />
                        <div className="term">
                            <p className="arrow">{">"}</p>
                            <Typing typing={this.state.typing} />
                            <Cursor />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Screen;