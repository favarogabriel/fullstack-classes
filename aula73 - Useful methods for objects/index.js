const produto = {
  nome: 'Caneca',
  preco: 1.8,
  material: 'porcelana'
};
console.log(Object.entries(produto));

for(let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
};
