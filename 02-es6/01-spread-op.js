/* SPREAD OPERATOR */

// JavaScript utiliza ... para operadores rest y spread pero no son lo mismo.
// Spread: Expande un array en sus elementos.

/* SPREAD OPERATOR CON ARRAYS */

// Lo podemos usar para fusionar el contenido de dos arrays en uno solo.
const misColores = ['Amarrillo', 'Azul', 'Rojo']
const misColores2 = ['Verde', 'Naranja', ...misColores]

console.log(misColores2)
// Resultado: [ 'Verde', 'Naranja', 'Amarrillo', 'Azul', 'Rojo' ]

// Otra forma de fusionar arreglos

const misColores3 = ['Verde', 'Negro']
const misColores4 = ['Amarrillo', 'Café', 'Rojo']

const misColores5 = [...misColores3, ...misColores4]
console.log(misColores5)


/* Uso de Spread Operator con Objetos Literales */

const alumno = {
    matricula: '340455',
    nombre: 'Pedro',
    apellido: 'Suarez',
    promedio: 70
}

const calificaciones = {
    promedio: 90,
    apellido: 'Pérez'
}

const alumnoConPromedio = { ...alumno, ...calificaciones}
console.log(alumnoConPromedio)