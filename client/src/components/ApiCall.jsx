<<<<<<< HEAD
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
export const ApiCall = (url) => fetch(url)
  .then((result) => result.json())
  .then((data) => data)
  .catch((err) => console.log(err));
=======
export const ApiCall = (url) => {
  return fetch(url)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};
>>>>>>> c64ef99d6bff9e958ec7c66ab389f0b0536875d6
