// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = função construtora
const pessoa2 = new Pessoa('Gabriel', 'F.'); // <- Pessoa = função construtora

console.dir(pessoa1);
console.dir(pessoa2);
