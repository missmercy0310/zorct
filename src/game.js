/* === Sanity Check === */

console.log("Welcome to Zorct!");

/* === Variables === */

const $location = document.getElementsByClassName("location");
const $locationHalf = document.getElementsByClassName("location-half");
const $score = document.getElementsByClassName("score");
const $moves = document.getElementsByClassName("moves");
const $text = document.getElementsByClassName("text");
const $typing = document.getElementsByClassName("typing");
const $cursor = document.getElementsByClassName("cursor");
let sound = true;

/* === Game Object === */

const game = {
    /* === Obj Properties === */

    /* Text */
    location: ['West of House'],
    score: 0,
    moves: 0,
    typing: [],

    /* Timer */
    time: 0,

    /* Dom Inputs */
    $copy: `<div class="copy"><p>Corq</p><p>Copyright (c) 2022 Mar Mercy. All rights reserved.</p><p>Revision 00</p></div>`,
    $start: `<div class="start"><p>West of House</p><p>You are standing in an open field west of a white house, with a boarded front door.</p><p>There is a small mailbox here.</p></div>`,

    /* === Methods === */

    /* Game Progress Stages */

    stage0 () {
        while ($location.lastChild) {
            $location.removeChild($location.lastChild);
        }
        $locationHalf[0].innerHTML += `<p>${this.location}</p>`;
        while ($score.lastChild) {
            $score.removeChild($score.lastChild);
        }
        $score[0].innerHTML += `<p>${this.score}</p>`;
        while ($moves.lastChild) {
            $moves.removeChild($moves.lastChild);
        }
        $moves[0].innerHTML += `<p>${this.moves}</p>`;
        $text.empty().append(this.$copy).append(this.$start);
        this.startTimer();
    },

    /* Check Command */

    checkCommand () {
        if (game.typing.join('') === 'sound off') {
            sound = false;
        } else if (game.typing.join('') === 'sound on') {
            sound = true;
        } else {
            $text.append(`<div class="response"><p>I don't know the meaning of the word "${game.typing.join('')}"</p></div>`);
        };
    },

    /* === Cursor Timer === */

    timer: null,

    startTimer() {
        this.timer = setInterval(this.increaseTime.bind(game), 200);
    },

    increaseTime() {
        this.time++;
        console.log(this.time);
        if (this.time === 0) {
            $cursor.empty();
        } else if (this.time === 1) {
            $cursor.append("<p>_</p>");
        } else if (this.time === 2) {
            $cursor.empty();
            this.time = 0;
        };
    },
};

/* === Event Listeners === */

/* === Key Binding === */

window.addEventListener("keyup", function() {
    let audio = new Audio(`Thocks/Thock${Math.floor(Math.random() * 8)}.mp3`);
    if (sound) {
        audio.play();
    }
});

window.addEventListener("keydown", function(e) {
    let k = (e.keyCode ? e.keyCode : e.which);
    if (k === "9" ||
    k === "16" ||
    k === "17" ||
    k === "18" ||
    k === "19" ||
    k === "20" ||
    k === "27") {
        
    } else if (k === "8") {
        game.typing.pop();
        $typing.empty().append(`<p>${game.typing.join('')}</p>`);
    } else if (k === "13") {
        $text.append(`<p class="typed">>${game.typing.join('')}</p>`)
        game.checkCommand();
        game.typing = [];
        $typing.empty();
    } else if (e.key) {
        game.typing.push(`${e.key}`);
        $typing.empty().append(`<p>${game.typing.join('')}</p>`);
    }
});

/* === Game Start === */

game.stage0();