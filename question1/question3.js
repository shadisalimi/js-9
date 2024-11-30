//? 3. Write a code to implement search on array items and returns the answers in an array
// hint: the search is only based on the first letters of the word
// Example:
const brands = [
    'dell',
    'hp',
    'asus',
    'lenovo',
    'apple',
    'acer',
    'samsung',
    'sony',
  ];
  function brandsSearch(arr, query) {
    return arr.filter((brand)=>brand.startsWith(query)); //  to be completed
  }
  
  console.log(brandsSearch(brands, 'a')); // result : [ 'asus', 'apple', 'acer' ]
  console.log(brandsSearch(brands, 'sa')); // result : [ 'samsung' ]
  console.log(brandsSearch(brands, 'son')); // result : [ 'sony' ]
  