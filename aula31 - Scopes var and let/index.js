// const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz';

// var nome2 = 'Otávio'; // Redeclarada

// if (verdadeira) {
//   let nome = 'Otávio'; // criando
//   console.log(nome, nome2);

//   if(verdadeira) {
//     let nome = 'Outra coisa';
//     console.log('Ok.');
//   }
// }

var sobrenome = 'Fávaro';

function falaOi () {
  console.log(sobrenome);
} 

falaOi();
