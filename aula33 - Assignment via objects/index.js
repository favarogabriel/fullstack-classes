const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Fávaro',
  idade: 17,
  endereco: {
    rua: 'Av Brasil',
    numero: 355
  }
};

// Atribuição via desestruturação
const { nome = '', sobrenome, idade } = pessoa;
console.log(nome, sobrenome);
