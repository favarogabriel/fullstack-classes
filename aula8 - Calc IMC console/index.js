/*
Pessoa tem X anos, pesa X kg
tem X de altura e seu IMC é de X
Pessoa nasceu em X
*/

const primeiroNome = 'Ana Luiza';
const sobrenome = 'Gonzaga';
const idade = 18;
const peso = 60;
const alturaEmM = 1.76;
let imc;
imc = peso / (alturaEmM * alturaEmM);
let anoNascimento;
anoNascimento = 2022 - idade;

console.log(`${primeiroNome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg.`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}.`);
console.log(`${primeiroNome} ${sobrenome} nasceu em ${anoNascimento}.`);

