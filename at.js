const nomes = ['Alex', 'Bárbara', 'Carla', 'Daniel', 'Eva']

// Retorna o item do índice/posição passado por parametro
const paramPositivo = nomes.at(1)
console.log(paramPositivo)

// Retorno o último item do array, valor negativo
const paramNegativo = nomes.at(-1)
console.log(paramNegativo)

// Item não encontrado, índice/posição não existe
const naoEncontrado = nomes.at(7)
console.log(naoEncontrado)

// Usando função passando parametro para retorna o valor.
function nome(n) {
    return n.at(3)
}

const retornoFuncao = nome(nomes)
console.log(retornoFuncao)