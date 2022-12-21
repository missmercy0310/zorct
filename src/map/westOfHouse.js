import Place from "./place";
import Thing from "./thing";

const westOfHouse = new Place("westOfHouse");
westOfHouse.name = "West of House";
westOfHouse.description = "You are standing in an open field west of a white house, with a boarded front door. There is a small mailbox here.";

const letter = new Thing("letter");
letter.takable = true;
letter.taken = false;
letter.readable = true;
letter.read = <div className="response letter">
    <div><p>The letter reads as follows:</p></div>
    <div>
        <p>Welcome to Hell!</p>
        <p>You have been sent here for misuse of the word "multitudinous." Have a look around!</p>
        <p>Yours truly,</p>
        <p>P.Code</p>
    </div>
    <div><p>This concludes the letter.</p></div>
</div>;

const mailbox = new Thing("mailbox");
mailbox.openable = true;
mailbox.opened = <div className="response"><p>There is a letter in the mailbox.</p></div>;
mailbox.readable = true;
mailbox.read = <div className="response"><p>The mailbox is labeled. The label reads "666 Hell St."</p></div>;

westOfHouse.things = [letter, mailbox];

export default westOfHouse