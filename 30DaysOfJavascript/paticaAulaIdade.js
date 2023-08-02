const prompt = require('prompt-sync')({sigint: true});

let idade = prompt('Qual a sua idade? ');

if (idade >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você é menor de idade! Ainda faltam ' + (18 - idade) + ' anos para você ser maior de idade.');
}