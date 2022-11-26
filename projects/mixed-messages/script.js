import { getContrastYIQ, getRandomColor } from './modules/beautify.mjs';
import { createCard } from './modules/createCard.mjs';
import { adjectives, nouns, verbs } from './modules/data.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const randomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const queryResource = async (query) => {
    const url =
      'https://api.quotable.io/search/quotes?query=${query}&fields=content';
    const response = await fetch(url);
    return response.json();
  };

  const generateMessage = (nouns, verbs, adjectives) => {
    const noun = randomElement(nouns);
    const verb = randomElement(verbs);
    const adjective = randomElement(adjectives);
    const mantra = `${noun} ${verb} ${adjective}`;
    return mantra.charAt(0).toUpperCase() + mantra.slice(1);
  };

  function getMantras(components) {
    components.forEach(function (component) {
      component.innerHTML = generateMessage(nouns, verbs, adjectives);
    });
  }

  function colorize(components) {
    components.forEach(function (section) {
      section.style.backgroundColor = getRandomColor();
      section.style.color = getContrastYIQ(getRandomColor());
    });
  }

  const createCardComponents = (count) => {
    const components = [];
    for (let i = 0; i < count; i += 1) {
      components.push(createCard());
    }
    return components;
  };

  function displayQuotes(promise) {
    const totalQuotes = 20; // change this to change the number of quotes
    const quoteComponents = createCardComponents(totalQuotes);
    const quoteContainer = document.getElementById('quote-container');

    const quoteCards = document.getElementById('quote-wrapper');
    if (quoteCards) {
      quoteCards.innerHTML = '';
    }

    // get the user query
    const query = document.getElementById('search-field').value;

    // get the quotes from the API
    const quotes = queryResource(query);

    // create the quote cards
    quotes.then((data) => {
      data.results.forEach((quote, index) => {
        const quoteCard = quoteComponents[index];
        const quoteParagraph = quoteCard.querySelector('.quote');
        const quoteAuthor = quoteCard.querySelector('.quote-author');
        const quoteTag = quoteCard.querySelector('.tag');
        quoteParagraph.innerHTML = quote.content;
        quoteAuthor.innerHTML = quote.author;
        quoteTag.innerHTML = quote.tags;
        quoteCards.appendChild(quoteCard);
      });
    });

    // display the quote cards
    quoteContainer.style.display = 'block';
  }

  const getQuoteTag = () => {
    const tags = document.querySelectorAll('.tags');
    let quoteTag = '';
    tags.forEach((tag) => {
      tag.addEventListener('click', (event) => {
        quoteTag = event.target.innerHTML;
      });
    });
    return quoteTag;
  };

  const autoFillField = (input, value) => {
    if (input && value) {
      input.value = value;
    }
  };

  const searchField = document.getElementById('search-field');
  autoFillField(searchField, getQuoteTag());

  function searchQuotesByTagName(tagValue) {
    queryResource(tagValue).then((data) => {
      console.log(data);
    });
  }

  const getQuoteButton = document.querySelector('#search-button');

  // Attach an event listener to the `button`
  getQuoteButton?.addEventListener('click', displayQuotes);

  // load the page with quotes
  //displayQuotes();
  //colorize(document.querySelectorAll('section')); // experiment and delete it

  // call the searchQuotesByTagName function
  searchQuotesByTagName();
});
