//Esta funciión es para comprobar si esta bien linkeada
//alert("Hola");


// var numero = 10;


//tambien se puede declarar variables con let, var es antiguo!! ahora se utiliza let!

//valor numerico
let numero = 10;

//valor string o texto
let texto = "karlos";
let texto2 = 'karlos';

//valor boolean
let verdadero = true;
let falso = false;

//objeto
let object = {}

//arreglo siempre va entre [] Corchetes!!!
let array = []



let x = 100;
let y = 50;
let suma = x + y;
//para que imprima el resultado en la consola!!
console.log( x + y );

console.log(suma);

//Operadores Aritmeticos Javascript

// +  -  *  /  %

let cambiar = 500;
console.log (cambiar);
cambiar = 5;
console.log(cambiar);

//Arrays

let frutas = ["melon", "sandia", "fresa"]




// agregar elemento al arreglo con codigo con estas formas  lo + indicado .push
frutas[3]= "Manzana";

frutas.push ("guayaba");

// el .pop borra el ultimo elemento.
//frutas.pop();
//frutas.pop();

// .splice borra segun la posisicon y el numero de elementos
frutas.splice (1, 2);
console.log (frutas);

//OBJECT

let persona = { 
    nombre: "Carlos",
    direccion: "Edo Mex",
    telefono: "5542871612",
    email: "karlos-martinez@hotmail.com",
    edad: "31",
    trabajos: ["dev.f", "Developer", "etc"],
    mascotas : { perrito : "Salchicha",
    gatito : "angora",
    pez : "dorado"


    }

}

//para llegar especificamente a un dato que conttiene el objeto
console.log(persona.mascotas.pez);