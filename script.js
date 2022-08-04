/* jshint esversion: 6 */
function fetchResource(url, container) {
	let element = document.getElementById(container);
	fetch(url)
		.then(function (response) {
			return response.text();
		})
		.then(function (text) {
			if (element) {
				element.innerHTML = text;
			}
		})
        .catch(function (error) {
            console.log(error);
        });
}

fetchResource('/assets/header.html', "header");
fetchResource('/assets/footer.html', "footer");

// const getResource = (url) => {
//     let resource;
//     fetch(url)
//         .then(function (response) {
//             return response.text();
//         })
//         .then(function (content) {
//             resource = content;
//         });
//     return resource;
// }
//
// const displayResource = (content, container) => {
// 	document.querySelector(container).innerHTML = content;
// }
//
// const header = getResource('/assets/header.html');
// const footer = getResource('/assets/footer.html');
//
// displayResource(header, 'header');
// displayResource(footer, 'footer');


//months array
const months = [];
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

const dateElement = document.getElementById("date");
if (dateElement) {
    dateElement.innerHTML = `${day}, ${month} ${date}, ${year}`;
}
