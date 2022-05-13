// For in -> lê os índices ou chaves do objeto
const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Favaro',
  idade: 17
};


for (let key in pessoa) {
  console.log(key, pessoa[key]);
}
  
// const chave = 'nome';
// console.log(pessoa[chave]);

// for (let index in frutas) {
//   console.log(frutas[index]);
// }

// for (let i = 0; i < frutas.length; ++i) {
//   console.log(frutas[i]);
// }
