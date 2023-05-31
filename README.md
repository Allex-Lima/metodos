#**Método Array.at()**
>>O método at() recebe um parâmetro (número) positivo ou negativo referenciando o índice.\
>>Caso o índice exista no array retorna o item da posicão.\
>>Caso o índice não exista no array retorna undefined.
>>>>Referência MDN: [at()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

#**Método Array.concat()**
>>O método concat() recebe um/dois ou mais valores (Arrays) como parâmetro e concatena, retornando um novo array, sem alterar os existentes.
>Exemplo:
```
const matematicos = [
    'Isaac Newton',
    'Euclides',
    'Arquimedes',
    'Pitágoras',
    'Leonardo Fibonacci'
]
const fisicos = [
    'Galileu Galilei',
    'Marie Curie',
    'Albert Einstein',
    'Thomas Edison '
]
const quimicos = [
    'John Dalton',
    'Antoine Lavoisier',
    'Dmitri Mendeleiev'
]
const grandesMentes = matematicos.concat(fisicos, quimicos)\
console.log(grandesMentes)
resultado
[
  'Isaac Newton',
  'Euclides',
  'Arquimedes',\
  'Pitágoras',
  'Leonardo Fibonacci',
  'Galileu Galilei',\
  'Marie Curie',
  'Albert Einstein',
  'Thomas Edison ',\
  'John Dalton',
  'Antoine Lavoisier',
  'Dmitri Mendeleiev'\
]
```
>>>>Referência MDN: [concat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

#**Método array.copywithin()**
>>O método copywithin() recebe três parâmetros.
>>>1. *__target__*: é basicamente o alvo, posição aonde deve começar o *__start__*. Os elementos das posições anteriores ao *__target__* permaneceram no array.
>>>2. *__start__*: a partir desta posição o elemento será copiado.
>>>3. *__end__*: posição final, sinaliza a posição aonde finalizará a copia dos elementos. O mesmo não altera o tamanho do array.

*obs*:
* É um método de alta performance para troca de dados de um Array.
* É um método mutável.
>Exemplo:
```
const nomes = [
    'Alex',
    'Bárbara',
    'Sandro',
    'Maria',
    'Paula',
    'Arthur',
]

console.log(nomes);

const copiaNomes = nomes.copyWithin(3, 1, 4)

console.log(copiaNomes);
```
