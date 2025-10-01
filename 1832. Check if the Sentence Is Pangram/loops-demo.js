// TODOS LOS TIPOS DE LOOPS EN JAVASCRIPT
console.log("=== DEMO DE TODOS LOS LOOPS ===");

let array = ['a', 'b', 'c'];
let string = "abc";
let objeto = {x: 1, y: 2, z: 3};

// 1. FOR TRADICIONAL (el que conocías)
console.log("\n1. FOR TRADICIONAL:");
for (let i = 0; i < array.length; i++) {
    console.log(`Índice ${i}: ${array[i]}`);
}

// 2. WHILE (el que conocías)
console.log("\n2. WHILE:");
let i = 0;
while (i < array.length) {
    console.log(`While: ${array[i]}`);
    i++;
}

// 3. DO...WHILE (el que conocías)
console.log("\n3. DO...WHILE:");
let j = 0;
do {
    console.log(`Do-while: ${array[j]}`);
    j++;
} while (j < array.length);

// 4. FOREACH (el que conocías)
console.log("\n4. FOREACH:");
array.forEach((elemento, indice) => {
    console.log(`ForEach índice ${indice}: ${elemento}`);
});

// 5. FOR...OF (EL NUEVO - itera valores)
console.log("\n5. FOR...OF (valores):");
for (let valor of array) {
    console.log(`For-of: ${valor}`);
}
for (let char of string) {
    console.log(`For-of string: ${char}`);
}

// 6. FOR...IN (EL NUEVO - itera propiedades/índices)
console.log("\n6. FOR...IN (propiedades/índices):");
for (let propiedad in objeto) {
    console.log(`For-in objeto: ${propiedad} = ${objeto[propiedad]}`);
}
for (let indice in array) {
    console.log(`For-in array: índice ${indice} = ${array[indice]}`);
}

// 7. MAP (devuelve nuevo array)
console.log("\n7. MAP:");
let mapeado = array.map((elemento, indice) => {
    console.log(`Map índice ${indice}: ${elemento}`);
    return elemento.toUpperCase();
});
console.log("Resultado map:", mapeado);

// 8. FILTER (filtra elementos)
console.log("\n8. FILTER:");
let filtrado = array.filter((elemento, indice) => {
    console.log(`Filter evaluando: ${elemento}`);
    return elemento !== 'b';
});
console.log("Resultado filter:", filtrado);

// 9. REDUCE (acumula valores)
console.log("\n9. REDUCE:");
let numeros = [1, 2, 3, 4];
let suma = numeros.reduce((acumulador, valor) => {
    console.log(`Reduce: ${acumulador} + ${valor} = ${acumulador + valor}`);
    return acumulador + valor;
}, 0);
console.log("Suma total:", suma);

// 10. FIND (encuentra primer elemento)
console.log("\n10. FIND:");
let encontrado = array.find(elemento => {
    console.log(`Find evaluando: ${elemento}`);
    return elemento === 'b';
});
console.log("Encontrado:", encontrado);

// 11. SOME (verifica si alguno cumple)
console.log("\n11. SOME:");
let algunoCumple = array.some(elemento => {
    console.log(`Some evaluando: ${elemento}`);
    return elemento === 'b';
});
console.log("Alguno cumple:", algunoCumple);

// 12. EVERY (verifica si todos cumplen)
console.log("\n12. EVERY:");
let todosCumplen = array.every(elemento => {
    console.log(`Every evaluando: ${elemento}`);
    return elemento.length === 1;
});
console.log("Todos cumplen:", todosCumplen);

console.log("\n=== RESUMEN ===");
console.log("Loops que conocías: for, while, do-while, forEach");
console.log("Loops nuevos: for...of, for...in");
console.log("Métodos de array: map, filter, reduce, find, some, every");