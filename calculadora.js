// Calculadora nivel 1
const suma = (numA, numB) => numA + numB
const resta = (numA, numB) => numA - numB
const multiplicar = (numA, numB) => numA * numB
const dividir = (numA, numB) => numA / numB

console.log ('------Testeo de operaciones-----')
//Calculadora nivel 2
console.log (suma(5, 10))
console.log (resta(10, 5))
console.log (multiplicar(5, 10))
console.log (dividir(10, 5))
console.log (dividir(5, 0))

//Calculadora nivel 3
const cuadradoDeUnNumero = (numA) => multiplicar(numA, numA)

console.log(cuadradoDeUnNumero(2))
const promedioDeTresNumeros = (numA, numB, numC) => {
    let suma1 =  numA + numB
    let suma2 = suma1 + numC
    return dividir (suma2, 3)
}

console.log (promedioDeTresNumeros(10, 8, 6))

const calculadoraPorcentaje = (numA, numB) => {
    let multi = multiplicar (numA, numB)
    let divid= dividir ( multi, 100 )
    return divid
}
console.log(calculadoraPorcentaje (500, 20))