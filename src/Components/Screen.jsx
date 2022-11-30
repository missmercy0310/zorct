import React from "react";
import Place from "./Place";
import Score from "./Score";
import Moves from "./Moves";
import Text from "./Text";
import Typing from "./Typing";
import Cursor from "./Cursor";
import commands from "../commands";
import { westOfHouse } from "../map";

let copy = <div className="copy"><p className='title'>Hellscape</p><p>Copyright (c) 2022 Mar Mercy. All rights reserved.</p><p>Revision 00</p></div>;
let start = <div className="start"><p>{westOfHouse.name}</p><p>{westOfHouse.description}</p></div>;

class Screen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sound: false,
            place: westOfHouse,
            score: 0,
            moves: 0,
            text: [copy, start],
            typing: [],
            inventory: []
        }

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.checkCommand = this.checkCommand.bind(this);
    }

    checkCommand = (command) => {
        this.setState(commands(command, this.state));
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
            // This line intentionally left blank
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
                    <div className="place-half">
                        <Place place={this.state.place} />
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