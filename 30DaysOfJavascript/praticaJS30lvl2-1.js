const prompt = require('prompt-sync')({sigint: true});

const nota_estudante = prompt('Digite a nota do primeiro estudante: ');
const segundaNota_estudante = prompt('Digite a segunda nota do estudante: ');

const media_estudante = (nota_estudante + segundaNota_estudante) / 2;

if (media_estudante > 8) {
    console.log('Aprovado com a conceito A!');
} else if (media_estudante > 7 && media_estudante < 8.9) {
    console.log('Aprovado com a conceito B!');
} else if (media_estudante > 6.0 && media_estudante < 6.9) {
    console.log('Aprovado com a conceito C!');
} else if (media_estudante > 5 && media_estudante < 5.9) {
    console.log('Aprovado com a conceito D!');
} else {
    console.log('Reprovado com a conceito E!');
}