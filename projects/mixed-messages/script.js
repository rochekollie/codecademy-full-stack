import { adjectives, nouns, verbs } from './data.mjs';

const randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateMessage = (nouns, verbs, adjectives) => {
    const noun = randomElement(nouns);
    //const noun = document.getElementById('text-input').value;
    const verb = randomElement(verbs);
    const adjective = randomElement(adjectives);
    const mantra = `${noun} ${verb} ${adjective}`;
    return mantra.charAt(0).toUpperCase() + mantra.slice(1);
};

function showMantras(components) {
  components.forEach(function (component) {
    component.innerHTML = generateMessage(nouns, verbs, adjectives);
  });
}

/**
 * Generate a random hex color
 * @returns {string} - hex color
 */
export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

/**
 * Generate a random hex color
 * @param {*} hexColor  - hex color
 * @returns  - text color
 */
export const getContrastYIQ = (hexColor) => {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
};

function colorize(components) {
  components.forEach(function (section) {
    section.style.backgroundColor = getRandomColor();
    section.style.color = getContrastYIQ(getRandomColor());
  });
}

const createMantraComponent = () => {
  const mantra = document.createElement('h2');
  mantra.setAttribute('class', 'mantra');
  return mantra;
};

const createMantraComponents = (count) => {
  const components = [];
  for (let i = 0; i < count; i += 1) {
    components.push(createMantraComponent());
  }
  return components;
};

const mantraButton = document.querySelector('#button');
mantraButton?.addEventListener('click', (e) => {
  e.preventDefault();
  const mantraWrapper = document.querySelector('#mantra-wrapper');
  mantraWrapper.innerHTML = '';
  const mantraComponents = createMantraComponents(60);
  for (let i = 0; i < mantraComponents.length; i += 1) {
    mantraWrapper.appendChild(mantraComponents[i]);
  }
  showMantras(mantraComponents);
  colorize(mantraComponents);
});
