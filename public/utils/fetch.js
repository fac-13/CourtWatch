/*eslint-disable*/

const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

export const getData = (url) => {
  return fetch(url)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
};

export const postData = (url, data) => {

  return fetch(url, { method: 'POST', body: JSON.stringify({ data }), headers: { 'Content-Type': 'application/json' } })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
};




