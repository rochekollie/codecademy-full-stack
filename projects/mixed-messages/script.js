import {getContrastYIQ, getRandomColor} from './colorize.mjs';
import {adjectives, nouns, verbs} from './data.mjs';
import { createMantraComponent } from './createUI.mjs';

const randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateMessage = (nouns, verbs, adjectives) => {
  const noun = randomElement(nouns);
  const verb = randomElement(verbs);
  const adjective = randomElement(adjectives);
  const mantra = `${noun} ${verb} ${adjective}`;
  return mantra.charAt(0).toUpperCase() + mantra.slice(1);
};

function showMantra(components) {
  components.forEach(function (section) {
    const mantra = section.querySelector('h2');
    mantra.innerHTML = generateMessage(
      nouns,
      verbs,
      adjectives
    );
  });
}

function colorize(components) {
  components.forEach(function (section) {
    section.style.backgroundColor = getRandomColor();
    section.style.color = getContrastYIQ(getRandomColor());
  });
}

const mantraButton = document.querySelector('#mantra-button');
mantraButton?.addEventListener('click', (e) => {
  e.preventDefault();
  const sections = document.querySelectorAll('section');
  showMantra(sections);
  colorize(sections);
});
