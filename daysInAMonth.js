/*Exercises: Level 3
Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.*/

let month = prompt('Enter a month: ').toLowerCase();
let days = 0;

switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        days = 31;
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        days = 30;
        break;
    case 'february':
        days = 28;
        break;
    default:
        console.log('Enter a valid month');
        break;
}