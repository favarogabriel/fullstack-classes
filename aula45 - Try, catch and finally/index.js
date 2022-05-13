function returnHour(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância Date');
  }
  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
};

try {
  const data = new Date ('01-01-1970 12:58:12');
  const hora = returnHour();
  console.log(hora);
} catch (err) {
  // Tratar erro
} finally {
  console.log('Tenha um bom dia!')
}
