/*Declare an empty array;
Declare an array with more than 5 number of elements
Find the length of your array
Get the first item, the middle item and the last item of the array
Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
Print the array using console.log()
Print the number of companies in the array
Print the first company, middle and last company
Print out each company
Change each company name to uppercase one by one and print them out
Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
Filter out companies which have more than one 'o' without the filter method
Sort the array using sort() method
Reverse the array using reverse() method
Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle IT company or companies from the array
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies*/

const prompt = require('prompt-sync')({sigint: true});

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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  //Find the length of your array
  console.log(countries.length );
  //Get the first item, the middle item and the last item of the array
    console.log(countries[0]);
    console.log(countries[Math.floor(countries.length / 2)]);
    console.log(countries[countries.length - 1]);
    //Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
    const mixedDataTypes = [
        'string',
        1,
        true,
        null,
        undefined,
        'another string'
    ]

    //Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    const itCompanies = [
        'Facebook',
        'Google',
        'Microsoft',
        'Apple',
        'IBM',
        'Oracle',
        'Amazon'
    ]
    //Print the array using console.log()
    console.log(itCompanies);
    //Print the number of companies in the array
    console.log(itCompanies.length);
    //Print the first company, middle and last company
    console.log(itCompanies[0]);
    console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
    console.log(itCompanies[itCompanies.length - 1]);
    //Print out each company
    for (let i = 0; i < itCompanies.length; i++) {
        console.log(itCompanies[i]);
    } 
    //Change each company name to uppercase one by one and print them out
    for (let i = 0; i < itCompanies.length; i++) {
        console.log(itCompanies[i].toUpperCase());
    }
    //Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    console.log(`${itCompanies.join(', ')} are big IT companies.`);
    //Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
    const company = prompt('Enter a company name');
    if (itCompanies.includes(company)) {
        console.log(company);
    } else {
        console.log('Company not found');
    }
    //Filter out companies which have more than one 'o' without the filter method
    for (let i = 0; i < itCompanies.length; i++) {
        if (itCompanies[i].includes('oo')) {
            console.log(itCompanies[i]);
        } else {
        console.log('Company not found');
    }
  }
    //Sort the array using sort() method
    console.log(itCompanies.sort());
    //Reverse the array using reverse() method
    console.log(itCompanies.reverse());
    //Slice out the first 3 companies from the array
    console.log(itCompanies.slice(0, 3));
    //Slice out the last 3 companies from the array
    console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));
    //Slice out the middle IT company or companies from the array
    console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1));
    //Remove the first IT company from the array
    itCompanies.shift();
    console.log(itCompanies);
    //Remove the middle IT company or companies from the array
    itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
    console.log(itCompanies);
    //Remove the last IT company from the array
    itCompanies.pop();
    console.log(itCompanies);
    //Remove all IT companies
    itCompanies.splice(0, itCompanies.length);
    console.log(itCompanies);

    //fim do exercício.