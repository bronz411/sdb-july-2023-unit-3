const presidents = [
  { first: "George", last: "Washington", year: 1732, passed: 1799 },
  { first: "John", last: "Adams", year: 1735, passed: 1826 },
  { first: "Thomas", last: "Jefferson", year: 1743, passed: 1826 },
  { first: "James", last: "Madison", year: 1751, passed: 1836 },
  { first: "James", last: "Monroe", year: 1758, passed: 1831 },
  { first: "John", last: "Adams", year: 1767, passed: 1848 },
  { first: "Andrew", last: "Jackson", year: 1767, passed: 1845 },
  { first: "Martin", last: "Van Buren", year: 1782, passed: 1862 },
  { first: "William", last: "Harrison", year: 1773, passed: 1841 },
  { first: "John", last: "Tyler", year: 1790, passed: 1862 },
  { first: "James", last: "Polk", year: 1795, passed: 1849 },
  { first: "Zachary", last: "Taylor", year: 1784, passed: 1850 },
  { first: "Millard", last: "Fillmore", year: 1800, passed: 1874 },
  { first: "Franklin", last: "Pierce", year: 1804, passed: 1869 },
  { first: "James", last: "Buchanan", year: 1791, passed: 1868 },
  { first: "Abraham", last: "Lincoln", year: 1809, passed: 1865 },
  { first: "Andrew", last: "Johnson", year: 1808, passed: 1875 },
  { first: "Ulysses", last: "Grant", year: 1822, passed: 1885 },
  { first: "Rutherford", last: "Hayes", year: 1822, passed: 1893 },
  { first: "James", last: "Garfield", year: 1831, passed: 1881 },
  { first: "Chester", last: "Arthur", year: 1829, passed: 1886 },
  { first: "Grover", last: "Cleveland", year: 1837, passed: 1908 },
  { first: "Benjamin", last: "Harrison", year: 1833, passed: 1901 },
  { first: "William", last: "McKinley", year: 1843, passed: 1901 },
  { first: "Theodore", last: "Roosevelt", year: 1858, passed: 1919 },
  { first: "William", last: "Taft", year: 1857, passed: 1930 },
  { first: "Woodrow", last: "Wilson", year: 1856, passed: 1924 },
  { first: "Warren", last: "Harding", year: 1865, passed: 1923 },
  { first: "Calvin", last: "Coolidge", year: 1872, passed: 1933 },
  { first: "Herbert", last: "Hoover", year: 1874, passed: 1964 },
  { first: "Franklin", last: "Roosevelt", year: 1882, passed: 1945 },
  { first: "Harry", last: "Truman", year: 1884, passed: 1972 },
  { first: "Dwight", last: "Eisenhower", year: 1890, passed: 1969 },
  { first: "John", last: "Kennedy", year: 1917, passed: 1963 },
  { first: "Lyndon", last: "Johnson", year: 1908, passed: 1973 },
  { first: "Richard", last: "Nixon", year: 1913, passed: 1994 },
  { first: "Gerald", last: "Ford", year: 1913, passed: 2006 },
  { first: "Jimmy", last: "Carter", year: 1924, passed: undefined },
  { first: "Ronald", last: "Reagan", year: 1911, passed: 2004 },
  { first: "George", last: "Bush", year: 1924, passed: 2018 },
  { first: "Bill", last: "Clinton", year: 1946, passed: undefined },
  { first: "George", last: "Bush", year: 1946, passed: undefined },
  { first: "Barack", last: "Obama", year: 1961, passed: undefined },
  { first: "Donald", last: "Trump", year: 1946, passed: undefined },
  { first: "Joseph", last: "Biden", year: 1942, passed: undefined },
];

// ? How many presidents have we have (listed)
let numberofPresidents = presidents.length;

// ? How do I access just John Adams console.log(first and last name)
console.log("J. Adams: ", presidents[1].first, presidents[1].last);

// ? Create a variable called alivePresidents
let alivePresidents = presidents.filter(
  (president) => president.passed == undefined
);
console.log(alivePresidents);

// ? Create an array of dead presidents

let deadPreasidents = presidents.filter(
  (president) => president.passed !== undefined
);

// Create a forEach loop on passed presidents.
// Display first and last name and the age when died. passed year - year they were born.

deadPreasidents.forEach((president) =>
  console.log(
    president.first,
    president.last,
    president.passed - president.year
  )
);

/* 
    ! Challenge
    * utilize a filter method to create a new array with presidents who were born after the 1900's
    * utilize your new filtered array & use .forEach to print a string interpolated name of the remaining presidents
*/

/*
 *1. assign a variable that will return of  an array function
 *2. call .filter method on presidents array
 *3. Utilize parameter that holds iterator of the presidents iterable (ex: object of George Washington, then John Adams, and so on)
 * for the expression of your arrow function, check if iterator's .year property is greater than 1900
 */

let bornAfter1900 = presidents.filter((p) => p.year >= 1900);
console.log(bornAfter1900);

/*
 * 1. Call forEach (just a fancy loop) on the new aarray of modern presidents
 * 2. use parameter that holds the iterator of the iterable
 * 3. this parameter will hold each president object instance
 * 4. you may now use p as a placeholder of an entire {}
 * 5. This allows you to use .property of each instance of president {}
 * 6. String interpolate the result of .first and .last properties
 * 7. wrap that in a console log so our fancy loop can iterate thru every instance of a president in the bornAfter1900 array.
 */
bornAfter1900.forEach((item) => console.log(`${item.first} ${item.last}`));
