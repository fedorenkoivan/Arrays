'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  const diff = [];
  array1.forEach((elem) => {
    if (!array2.includes(elem)) diff.push(elem);
  });
  return diff;
};

module.exports = { difference };
