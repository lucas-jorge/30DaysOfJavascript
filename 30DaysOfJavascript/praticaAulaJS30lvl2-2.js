/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

const prompt = require('prompt-sync')({sigint: true});

let season = prompt('Enter a month: ').toLowerCase();

if (season === 'September' || season === 'October' || season === 'November') {
    console.log('The season is Autumn.');
} else if (season === 'December' || season === 'January' || season === 'February') {
    console.log('The season is Winter.');
} else if (season === 'March' || season === 'April' || season === 'May') {
    console.log('The season is Spring.');
} else if (season === 'June' || season === 'July' || season === 'August') {
    console.log('The season is Summer.');
} else {
    console.log('You did not enter a valid month.');
}