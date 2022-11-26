export function createCard(tagCount) {
  // defaults elements to be cloned
  const div = document.createElement('div');
  const p = document.createElement('p');
  const span = document.createElement('span');

  // create the card div
  const card = div.cloneNode();
  card.classList.add("card");

  // create a quote element
  const quote = p.cloneNode();
  quote.classList.add("quote");

  // create an author element
  const author = p.cloneNode();
  author.classList.add("author");

  // create the tags wrapper div
  const tagsWrapper = div.cloneNode();
  tagsWrapper.classList.add("tags-wrapper");

  // create the specified number of tags and append each to tagsWrapper
  for (let i = 0; i < tagCount; i += 1) {
    const tag = span.cloneNode();
    tag.
        tag.classList.add("tags");
    tagsWrapper.appendChild(tag);
  }

  // append the quote, author, and tagsWrapper to the card
  card.appendChild(quote);
  card.appendChild(author);
  card.appendChild(tagsWrapper);

  return card;
}
