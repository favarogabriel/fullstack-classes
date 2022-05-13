const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,

  fala () {
    console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos!`)
  }
};

pessoa1.fala();