const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(total);

const pessoas = [
  { nome: 'Gabriel', idade: 17 },
  { nome: 'Maria', idade: 32 },
  { nome: 'Eduardo', idade: 62 },
  { nome: 'Luiz', idade: 13 },
  { nome: 'Rosana', idade: 23 },
  { nome: 'Wallace', idade: 65 }
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);
