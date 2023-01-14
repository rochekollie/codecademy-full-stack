import {Book} from "./Book.js";
import {Movie} from "./Movie.js";

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

// call the toggleCheckOutStatus method on the historyOfEverything instance
historyOfEverything.toggleCheckOutStatus();

// log the value saved to the isCheckOut property in the historyOfEverything instance
console.log(historyOfEverything.checkOutStatus);

// call the addRating method three times on the historyOfEverything instance
historyOfEverything.ratings.push(4);
historyOfEverything.ratings.push(5);
historyOfEverything.ratings.push(5);

// log the value saved to the averageRating property in the historyOfEverything instance
console.log(historyOfEverything.averageRating);


// create a Movie instance
const speed = new Movie('Jan de Bont', 'Speed', 116);

// call the toggleCheckOutStatus method on the speed instance
speed.toggleCheckOutStatus();

// log the value saved to the isCheckOut property in the speed instance
console.log(speed.checkOutStatus);

// call the addRating method three times on the speed instance
speed._ratings.push(1);
speed.ratings.push(1);
speed.ratings.push(5);

// log the value saved to the averageRating property in the speed instance
console.log(speed.averageRating);
