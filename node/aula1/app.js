const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

axios('https://www.gabrielfavaro.com.br/files/json/pessoas.json')
  .then(response => console.log(response.data))
  .catch(e => console.log(e));
