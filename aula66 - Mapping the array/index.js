const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const arrayDobro = numeros.map(num => num * 2);
console.log(arrayDobro);

const pessoas = [
  { nome: 'Gabriel', idade: 17 },
  { nome: 'Maria', idade: 32 },
  { nome: 'Eduardo', idade: 62 },
  { nome: 'Luiz', idade: 13 },
  { nome: 'Rosana', idade: 23 },
  { nome: 'Wallace', idade: 65 }
];

const nomes = pessoas.map(obj => obj.nome);
const apenasIdade = pessoas.map(obj =>  ({ idade: obj.idade }));
const idPessoas = pessoas.map(function(obj, indice) {
  obj.id = indice + 1;
  return obj;
});

console.log(nomes);
console.log(apenasIdade);
console.log(idPessoas);
