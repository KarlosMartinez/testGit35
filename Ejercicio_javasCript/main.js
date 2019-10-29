/*let nombre= prompt("Nombre")
console.log(nombre);
let edad =  prompt("edad");
console.log(edad)

let telefono= prompt("Telefono")
console.log(telefono)

let año = prompt("Año de NAcimiento"
)
Number (2019-año);

console.log(Number);*/

/*
let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");
let tel = prompt("Ingresa tu telefono");

console.log("Nombre: "+ nombre);
console.log ("Edad: "+ edad);
console.log ("Telefono:"+ tel);

let fecha_actual = prompt("ingresa tu Anio de NAcimiento");
console.log(typeof(fecha_actual));

let anio = Number (fecha_actual);
console.log(typeof(anio));

let anio_actual = 2019;
console.log (anio_actual - anio);*/



let persona = {

    nombre: "Carlos",
    direccion: "Edo Mex",
    telefono: "5542871612",
    peliculas: {accion:["13 hrs","diamnate de sangre"],
                terror:["annabel","Monja"],
                comedia:["Una esposa de Mentira"]     
                },
    Musica:{
            Rock:["U2", "AC/DC"],
            Pop:["Shakira","Lady Gaga"],
            Blues:["BB King", "Erick Clapton"]
             },
    Comida:["Pizza", "Hamburguesas", ]
    
}

console.log(persona.peliculas.terror[1]);
console.log(persona.Musica.Blues[0]);
console.log(persona.Comida[1]);