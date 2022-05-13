/*
&& -> Todas as expressões precisam ser verdadeiras para retornar "o valor verdadeiro mesmo"
|| -> Pelo menos uma expressão precisa ser verdadeira para retornar "o valor verdadeiro mesmo"

FALSY
false
0
'' "" ``
null/undefined
NaN
*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
