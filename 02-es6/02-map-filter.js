/* MAP */
// Convierte un arreglo en otro distinto, al cual le puede aplicar una operación a cada elemento

const myArray = [1, 2, 3, 4, 5, 6];
// Quiero sacar el cuadrado de cada elemento

// Forma tradicional con FOR
const arrayCuadrado = [];
for (let index = 0; index < myArray.length; index++) {
    const numero = myArray[index];
    arrayCuadrado.push(numero ** 2);
}
console.log('Array Cuadrado con FOR', arrayCuadrado);

// Lo anterior se puede simplificar con el uso de MAP
// RECORDEMOS: Que Map siempre debe tener un RETURN
//const arrayCuadradoMap = myArray.map((numero) => {
//    return numero ** 2
// })
const arrayCuadradoMap = myArray.map(numero => numero ** 2)
console.log('Array Cuadrado con MAP', arrayCuadradoMap);

const team = [
    { name: 'Luis', weight: 90, height: 1.80 },
    { name: 'Pedro', weight: 80, height: 1.70 },
    { name: 'Susana', weight: 60, height: 1.50 },
]

const teamWithIMC = team.map((person) => {
    return {...person, imc: person.weight*person.height**2}
});

console.log('Team con IMC', teamWithIMC)

/* FILTER */
// Filtra los elementos de un arreglo, según una condición

const personas = [
    { name: 'Luis', age: 44 },
    { name: 'Pedro', age: 15 },
    { name: 'Susana', age: 20 },
    { name: 'Juan', age: 30 },
    { name: 'Ana', age: 12 },
];

// Filtrar personas mayores de edad (18 años)
const mayoresDeEdad = personas.filter((persona) => {
    return persona.age >= 18;
})

console.log('Mayores de edad', mayoresDeEdad);

// Ahora quiero filtrar personas mayores de edad y solo quiero el nombre en el arreglo.

/* FILTER + MAP */
// Puedo encadenar los métodos de MAP y FILTER para que se haga uno después del otro.

const mayoresDeEdadNombres = personas
    .filter((persona) => persona.age >= 18)
    .map((persona) => persona.name);

console.log('Mayores de edad solo nombres', mayoresDeEdadNombres);

/* FIND */
// Busca un elemento en un arreglo, según una condición y regresa la primer coincidencia

const buscaLuis = personas.find((persona) => {
    return persona.name === 'Luis';
});

console.log('Busca Luis', buscaLuis);