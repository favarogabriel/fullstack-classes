// Factory function
// Constructor function
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome, 
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${nome} ${sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor);
    },

    fala(assunto) {
      return `${this.nome} está falando sobre ${assunto}.`;
    },

    altura,
    peso,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Gabriel', 'Favaro', 1.79, 60);
p1.nomeCompleto = 'Gabriel Favaro';
console.log(p1.nomeCompleto);
