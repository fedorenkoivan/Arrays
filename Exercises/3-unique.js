'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const unique = [];
  array.forEach((elem) => {
    if (unique.indexOf(elem) === -1) {
      unique.push(elem);
    }
  });
  return unique || undefined;
};

module.exports = { unique };
