/*Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.*/

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

const middleCountries = Math.floor(countries.length / 2);//mostra o número do índice do país do meio.
const firstHalf = countries.slice(0, middleCountries);//slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.
const secondHalf = countries.slice(middleCountries);//segundo array proveniente da segunda metade do array original.

if (countries.length % 2 === 0) {
    console.log('The array is even.');
} else {
    console.log('The array is odd, lets add one more country to the first array');
    firstHalf.push('Brazil');
}

console.log(firstHalf);
console.log(secondHalf);