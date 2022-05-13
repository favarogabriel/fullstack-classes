// IEEE 754-2008
let numero1 = 0.7; // number
let numero2 = 0.1; // number

numero1 = ((numero1 * 100) + (numero2 * 100)) / 100; // 0.8
numero1 = ((numero1 * 100) + (numero2 * 100)) / 100; // 0.9
numero1 = ((numero1 * 100) + (numero2 * 100)) / 100; // 1.0

console.log(numero1);
console.log(Number.isInteger(numero1));

// console.log(numero1.toString() + numero2);
// numero1 = numero1.toString();
// console.log(numero1.toFixed(2));
// console.log(Number.isInteger(numero1));
// let temp = numero1 * 'Olá';
// console.log(Number.isNaN(temp));


