const { nomes } = require('./dados')

console.log(nomes);
const copiaNomes = nomes.copyWithin(3, 1, 4)

console.log(copiaNomes);