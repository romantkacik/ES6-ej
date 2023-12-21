//* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1
}
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan',
]
const position1 = findArrayIndex(mainCharacters, 'Chewbacca')
console.log(position1)

const position2 = findArrayIndex(mainCharacters, 'Yoda')
console.log(position2)

//* Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array. Finalmente retorna el array. De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

function removeItem(array, text) {
  const index = findArrayIndex(array, text)

  if (index !== -1) {
    array.splice(index, 1)
  }

  return array
}
const newArray1 = removeItem(mainCharacters, 'Chewbacca')
console.log(newArray1)

const newArray2 = removeItem(mainCharacters, 'Yoda')
console.log(newArray2)

const newArray3 = removeItem(mainCharacters, 'Han Solo')
console.log(newArray3)
