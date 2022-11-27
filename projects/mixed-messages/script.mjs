import {getContrastYIQ, getRandomColor} from './beautify.mjs';
import {companies, databases, frameworks, languages, platforms, tools} from './data.mjs';


document.addEventListener('DOMContentLoaded', () => {

    const randomElement = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };

    const getMessage = () => {
        const noun = randomElement(languages);
        const verb = randomElement(frameworks);
        const adjective = randomElement(databases);
        const adverb = randomElement(tools);
        const preposition = randomElement(platforms);
        const company = randomElement(companies);
        const message = `${noun} ${verb} ${adjective}`;
        return message.charAt(0).toUpperCase() + message.slice(1);
    };

    function displayMessage() {
        const messageContainer = document.getElementById('message');
        if (messageContainer) {
            messageContainer.innerHTML = getMessage();
        }
    }

    function decorateCard(card) {
        card.style.backgroundColor = getRandomColor();
        card.style.color = getContrastYIQ(getRandomColor());
    }

    // Add event listener to the button
    document.querySelector('button')?.addEventListener('click', displayMessage);

    // load the page with a message
    displayMessage();
    decorateCard(document.querySelector('card')); // experiment and delete it

    // call the displayMessage function
    getMessage();
});
