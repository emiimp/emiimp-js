//DOM - SALUDO

let nombre = prompt("Ingrese su nombre");
let saludo = document.getElementById("saludo");
console.log(saludo.innerHTML);
saludo.innerHTML = `<h3>¡Bienvenid@, ${nombre}!</h3>`

//OPERACION

const multiplicacion = (a,b) => a * b;

let pesoArgentino = 1;
let precioDolarOficial = 135.75;

let cotizacionPeso = multiplicacion (pesoArgentino, precioDolarOficial)
console.log(cotizacionPeso)

alert(`Los precios están en USD. Para comprar en ARS, cotizamos según el dólar oficial del Banco Nación (Argentina): 1USD = ${cotizacionPeso}ARS`)

//ARRAY + OBJECT

const libros = [
    {id: 1,titulo:"Moby Dick",autor:"Herman Melville",precio:12.86,vendido:false},
    {id: 2,titulo:"The Picture of Dorian Gray",autor:"Oscar Wilde",precio:11.50,vendido:false},
    {id: 3,titulo:"Dracula",autor:"Bram Stoker",precio:13,vendido:false},
    {id: 4,titulo:"Frankenstein; or, The Modern Prometheus",autor:"Mary Shelley",precio:9.99,vendido:false},
    {id: 5,titulo:"Grimm's Fairytales",autor:"Grimm Brothers",precio:7.56,vendido:false},
    {id: 6,titulo:"Pride and Prejudice",autor:"Jane Austen",precio:9.99,vendido:false}

];

for (let index = 0; index < libros.length; index ++) {
    console.log (libros[index]);
}

//HIGH ORDER FUNCTIONS

let titulo = "";

let ofertas = libros.filter(item => item.precio < 10);
for(const item of ofertas){
    titulo = titulo + item.titulo;
}

alert(`Libros en oferta (precio menor a 10USD): ${titulo}. ¡No lo dejes pasar, ${nombre}!`)



