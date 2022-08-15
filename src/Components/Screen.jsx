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
            sound: props.sound,
            location: props.location,
            score: props.score,
            moves: props.moves,
            text: props.text,
            typing: props.typing
        }

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.checkCommand = this.checkCommand.bind(this);
        
    }

    checkCommand = (command) => {
        if (command[0] === 'sound') {
            if (command[1] === 'on' && !command[2]) {
                this.setState({sound: true});
            } else if (command[1] === 'off' && !command[2]) {
                this.setState({sound: false});
            }
        } else {
            this.props.text.push(<div className="response"><p>I don't know the word "{command[0]}"</p></div>);
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
            this.props.typing.pop();
            this.setState({typing: this.props.typing.join('')});
        } else if (k === 13) {
            this.props.text.push(<p className="typed">{'>'}{
                this.props.typing.join('')
            }</p>);
            let command = this.props.typing.join('').split(' ');
            console.log(command);
            this.checkCommand(command);
            this.props.typing.splice(0,this.props.typing.length);
            this.setState({
                text: this.props.text.map((item, index) =>
                    <div key={index}>{item}</div>
                )
            });
        } else if (e.key) {
            this.props.typing.push(`${e.key}`);
            this.setState({typing: this.props.typing.join('')});
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
                        <Location location={this.props.location} />
                    </div>
                    <div className="stats-half">
                        <div className="stats">
                            <div className="score-section">
                                <p>Score :</p>
                                <Score score={this.props.score} />
                            </div>
                            <div className="moves-section">
                                <p>Moves :</p>
                                <Moves moves={this.props.moves} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="screen-main">
                    <div className="screen-inner">
                        <Text text={this.props.text} />
                        <div className="term">
                            <p className="arrow">{">"}</p>
                            <Typing typing={this.props.typing} />
                            <Cursor />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Screen;