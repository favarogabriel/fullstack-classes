/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/

const a = {
  nome: 'Gabriel',
  sobrenome: 'Favaro'
};

const b = {...a};

a.nome = 'João';
console.log(b);
