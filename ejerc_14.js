//* Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! Busca información sobre la función de javascript Math.random()

function rollDice(numberOfFaces) {
  if (numberOfFaces <= 0 || !Number.isInteger(numberOfFaces)) {
    console.error('Error: El número de caras debe ser un entero mayor que 0.')
    return null
  }

  const result = Math.floor(Math.random() * numberOfFaces) + 1
  return result
}
const numberOfFaces = 6

const diceResult = rollDice(numberOfFaces)

if (diceResult !== null) {
  console.log(`Resultado del dado: ${diceResult}`)
}
rollDice(1)
