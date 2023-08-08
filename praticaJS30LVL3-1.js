/*Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method.
Slice the first ten countries from the countries array*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array and find the min and max age
ages.sort();
console.log(ages);
console.log(ages[0]);
console.log(ages[ages.length - 1]);

//Find the median age(one middle item or two middle items divided by two)
const middle = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    console.log((ages[middle] + ages[middle - 1]) / 2);
} else {
    console.log(ages[middle]);
}

//Find the average age(all items divided by number of items)
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
} 
console.log(sum / ages.length);

//Find the range of the ages(max minus min)
console.log(ages[ages.length - 1] - ages[0]);

//Compare the value of (min - average) and (max - average), use abs() method.
const average = sum / ages.length;
console.log(Math.abs(ages[0] - average));
console.log(Math.abs(ages[ages.length - 1] - average));

//Slice the first ten countries from the countries array
const firstTen = countries.slice(0, 10);
console.log(firstTen);