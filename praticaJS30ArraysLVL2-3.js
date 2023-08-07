/*In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'*/

const prompt = require('prompt-sync')({sigint: true});

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');

const allergicToHoney = prompt('Are you allergic to honey?').toLowerCase();

if (allergicToHoney === 'yes') {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1, 'Green Tea');
} else {
    console.log('You are not allergic to honey');
}

console.log(shoppingCart);