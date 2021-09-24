const getData = (api) => {
  return fetch(api)
    .then(response => response.json())
    .then(respomse => respomse)
    .catch(error => error);
};

export default getData;
