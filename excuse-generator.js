// Excuse Generator - Node.js
// Este programa genera excusas aleatorias

// Array de sujetos que pueden iniciar una excusa
const who = ['Mi perro', 'Mi abuela', 'El cartero', 'Un extraterrestre', 'Mi vecino'];

// Array de acciones en pasado
const action = ['se comió', 'destruyó', 'robó', 'escondió', 'rompió', 'perdió'];

// Array de objetos o situaciones
const what = ['mi tarea', 'mi teléfono', 'las llaves', 'mi proyecto', 'el informe', 'mi laptop'];

// Array de referencias de tiempo
const when = ['ayer', 'esta mañana', 'anoche', 'hace una hora', 'el lunes pasado', 'hoy temprano'];

// Selección aleatoria de cada array
const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];

// Concatenar los valores en una sola frase
const excuse = randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen;

// Imprimir la excusa en la consola
console.log(excuse);
