class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`)
  }
}

const p1 = new Pessoa('Gabriel', 'Favaro');
const p2 = new Pessoa('Luiz', 'Favaro');
const p3 = new Pessoa('Fernanda', 'Favaro');
const p4 = new Pessoa('Ana', 'Favaro');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
