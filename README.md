#**Método Array.at()**
>>O método at() recebe um parametro (número) positivo ou negativo referenciando o índice.\
>>Caso o índice exista no array retorna o item da posicão.\
>>Caso o índice não exista no array retorna undefined.
>>>>Referência MDN: [at()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

#**Método Array.concat()**
>>O método concat() recebe um/dois ou mais valores (Arrays) como parametro e concatena, retornando um novo array, sem alterar os existentes.
>Exemplo:
>>>const matematicos = [
    'Isaac Newton',
    'Euclides',
    'Arquimedes',
    'Pitágoras',
    'Leonardo Fibonacci'
]\
>>>const fisicos = [
    'Galileu Galilei',
    'Marie Curie',
    'Albert Einstein',
    'Thomas Edison '
]\
>>>const quimicos = [
    'John Dalton',
    'Antoine Lavoisier',
    'Dmitri Mendeleiev'
]\
>>>const grandesMentes = matematicos.concat(fisicos, quimicos)\
>>>console.log(grandesMentes)\
// resultado\
>>>[\
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
>>>>Referência MDN: [concat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

