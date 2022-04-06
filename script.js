/* Display current day, month and year in the footer as in the example below:
Monday, January 1, 2020
*/

//months array
const months = new Array();
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

//weekdays array
const weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";


//get current date
const d = new Date();
const day = weekdays[d.getDay()];
const month = months[d.getMonth()];
const date = d.getDate();
const year = d.getFullYear();


document.getElementById("date").innerHTML = `${day}, ${month} ${date}, ${year}`;
