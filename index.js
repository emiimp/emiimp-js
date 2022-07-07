let nombre = prompt("Ingrese su nombre");

for(let i = 0; i <=3; i++){
    {
    alert(`¡4 veces hola, ${nombre}!`);
}
}

let numero = parseInt(prompt(`${nombre}, por favor ingresá un número para multiplicar tres veces`));

for (let index = 2; index <=4; index++){
    let result = numero * index;
    let mensaje = `${numero} x ${index} =${result}`;
    alert(mensaje); 
}alert("Muchas gracias");

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21

let precioClase = 1700;
let descuento = 850;

let precioConDescuento = resta (suma(precioClase, iva(precioClase)), descuento)
console.log(precioConDescuento)

alert(`Precio final de la primera clase (50%off + IVA): ${precioConDescuento}ARS`)
