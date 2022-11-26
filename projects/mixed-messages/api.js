const queryResource = (query) => {
  const url =
    'https://api.quotable.io/search/quotes?query=${query}&fields=content';
  const responsePromise = fetch(url);
  responsePromise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.length);
    });
};

queryResource('love');
