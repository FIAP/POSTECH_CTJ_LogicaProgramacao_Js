import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA HIPOTENUSA');


console.log('Informe o Cateto Oposto:');
let catetoOposto = Number(pergunte());

console.log('Informe o Cateto Adjacente:');
let catetoAdjacente = Number(pergunte());


let co2 = Math.pow(catetoOposto, 2);
let ca2 = Math.pow(catetoAdjacente, 2);
let soma = co2 + ca2;
let hipotenusa = Math.sqrt(soma);


console.log('A hipotenusa é ' + hipotenusa);
