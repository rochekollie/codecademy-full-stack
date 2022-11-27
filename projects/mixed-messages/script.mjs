import {nouns, verbs, adjectives, subjects} from './partsOfSpeech.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const getRandomSentence = () => {
    const noun = getRandomElement(nouns);
    const verb = getRandomElement(verbs);
    const adjective = getRandomElement(adjectives);
    const subject = getRandomElement(subjects);

    const randomForm = getRandomElement([true, false]);

    let sentence = '';

    // If randomForm is true, the sentence will be in the form of
    if (randomForm) {
      sentence = `${noun} ${verb} ${adjective} ${subject}.`;
    } else { // If randomForm is false, the sentence will be in the form of
      sentence = `${adjective} ${subject} ${verb} ${noun}.`;
    }

    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  };

  function displaySentence() {
    document.querySelector('p').innerHTML = getRandomSentence();
  }

  // Add event listener to the button
  document.querySelector('button')?.addEventListener('click', displaySentence);

  // load the page with a message
  displaySentence();
});
