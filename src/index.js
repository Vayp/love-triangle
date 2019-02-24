/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let firstAmorous, secondAmorous, thirdAmorous;
  let lovers = 0
  for(firstAmorous = 0; firstAmorous <= preferences.length; firstAmorous++ ){
    secondAmorous = preferences[firstAmorous] - 1;
    thirdAmorous = preferences[secondAmorous] -1;
    if ((preferences[firstAmorous] > preferences.length)|(firstAmorous + 1 == preferences[firstAmorous])) firstAmorous++
      if(preferences[thirdAmorous]-1 == firstAmorous) lovers++;
  }
  return Math.round(lovers/3);
};
