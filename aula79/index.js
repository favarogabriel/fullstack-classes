function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    nome,
    sobrenome,
    falar(){
      console.log(`${this.nome} está falando.`)
    },
    comer(){
      console.log(`${this.nome} está comendo.`)
    },
    beber(){
      console.log(`${this.nome} está bebendo.`)
    },
  };

  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Gabriel', 'Favaro');
const p2 = criaPessoa('Ana', 'Luiza');

