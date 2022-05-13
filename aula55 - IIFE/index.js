// IIFE - > Imediately Invoked Function Expression
(function(idade, peso, altura) {

  const sobrenome = 'Favaro';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }
  function falaNome() {
    console.log(criaNome('Gabriel'));
  }
  falaNome();
  console.log(idade, peso, altura)

})(17, 65, 1.79);

const nome = 'Qualquer coisa';
