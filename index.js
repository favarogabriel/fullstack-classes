let velocidade_carro = 90;
const velocidade_maxima = 80;

function multa() {
  if (velocidade_carro >= velocidade_maxima) {
    console.log('Infração leve');
  } 
};

console.log(multa());