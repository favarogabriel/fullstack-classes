/*
Entre 0 - 11 horas > Bom dia
Entre 12 - 17 horas > Boa tarde
Entre 18 - 23 horas > Boa noite
*/

// If poder ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else if na checagem
// Só posso ter um else na checagem

// const hora = 50;

//  if (hora >= 0 && hora <= 11) {
//  console.log('Bom dia');
// } else if (hora >= 12 && hora <= 17) {
//   console.log('Boa tarde');
// } else if (hora >= 18 && hora <= 23) {
//   console.log('Boa noite');
// } else {
//   console.log('Olá');
// }

const clima = 'Chovendo';

if (clima === 'Limpo') {
  console.log('Não precisa de guarda-chuva :D');
} else if (clima === 'Chovendo') {
  console.log('Leva o guarda-chuva pae');
} else if (clima === 'Nublado') {
  console.log('Talvez você vá precisar do guarda-chuva');
}