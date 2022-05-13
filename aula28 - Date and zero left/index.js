// const umDia = 60*60 * 24 * 1000;
// const data = new Date();
// Ano, mês, dia, hora, minuto, segundo, milisegundo
// Mês começa do zero
// 0 - Domingo, 6 - Sábado

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const minuto = zeroAEsquerda(data.getMinutes());
  const segundo = zeroAEsquerda(data.getSeconds());
  const milisegundo = zeroAEsquerda(data.getMilliseconds());

  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}.${milisegundo}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);