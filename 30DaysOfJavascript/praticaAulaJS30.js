/*If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3*/

  const prompt = require('prompt-sync')({sigint: true});

    let a = prompt('Enter a number: ');
    let b = prompt('Enter another number: ');

    if (a > b) {
        console.log(a + ' is greater than ' + b);
    } else if (a < b) {
        console.log(a + ' is less than ' + b);
    }