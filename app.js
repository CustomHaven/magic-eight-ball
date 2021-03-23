
// User name and follow up Terniary to see if has an input or not
const inputName = prompt("What is your name?");

const firstChar = inputName.charAt(0).toUpperCase();

const restOfName = inputName.slice(1, inputName.length).toLowerCase();

const userName = firstChar + restOfName;

const annonymous = "Annonymous User";

const theUser = userName.length >= 1 ? `Hello ${userName}!` : `Hello ${annonymous}!`;
const user = theUser
console.log(user);



// User Question for us 8ball!!
const userStatment = alert('Will you become a werewolf tonight?');

const userQuestion = 'Will you become a werewolf tonight?';


// random Number generated 0 to 8
const randomNumber = Math.floor(Math.random()* 8);

// console.log(randomNumber);

let eightBall = "";


// creating control flow from randonNumber and assign it eightBall we will use switch statement

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    console.log("Unsuccessful? I dont really know what this game is about or how it works..")
    break;
}

console.log(`${user} was asked: ${userQuestion}?!.  ${eightBall}`);