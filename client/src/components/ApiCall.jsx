/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
export const ApiCall = (url) => fetch(url)
  .then((result) => result.json())
  .then((data) => data)
  .catch((err) => console.log(err));
