const nome = 'Gabriel';
const sobrenome = 'Favaro';
const idade = 17;

function soma(x, y) {
  return x + y;
}

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

export { nome as default, sobrenome, idade, soma };
