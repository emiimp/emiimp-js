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
}alert("Muchas gracias")