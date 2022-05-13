// Filter -> Sempre retornar um array com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor) {
//   return valor > 10;
// }

// const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Gabriel', idade: 17 },
  { nome: 'Maria', idade: 32 },
  { nome: 'Eduardo', idade: 62 },
  { nome: 'Luiz', idade: 13 },
  { nome: 'Rosana', idade: 23 },
  { nome: 'Wallace', idade: 65 }
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasMaisVelhas = pessoas.filter(obj => obj.idade >= 50);
const terminaComLetraA = pessoas.filter(obj => obj.nome.endsWith('a'));

console.log(terminaComLetraA);
console.log(pessoasMaisVelhas);
console.log(pessoasComNomeGrande);
