let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue continua para próxima interação
// Break sai do laço

for (let index in numeros) {
  let numero = numeros[index];

  if (numero === 2) {
    console.log('Pulei o número 2');
    continue;
  }

  if (numero === 7) {
    console.log('Número 7 encontrado, saindo da execução...')
    break;
  }

  console.log(numero);
}
