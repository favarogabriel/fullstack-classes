const pessoa1 = {
  nome: 'Gabriel',
  sobrenome: 'Favaro',
  idade: 17,
  falarNome: function() {
    return(`${this.nome} ${this.sobrenome} é o nome do rapaz que está programando.`)
  },
  getDataNascimento: function() {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear()
    return(`${this.nome} nasceu em ${ano - this.idade}`)
  }
};

console.log(pessoa1.getDataNascimento());