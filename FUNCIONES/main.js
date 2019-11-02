/*
// Declaracion de funcion
function suma(){
    console.log(5+5);
}

suma();

//function expresion

let resta = function (){
    console.log (5-5);
}

resta ();
*/
// ARROW FUNCTION
/*
const suma = (a = 0, b = 0) =>{
    console.log(a + b);
}

suma();
suma(1,2);
suma(5,95 );


const saludar = (usuario = "Invitado" ) =>{
console.log(" Bienvenido: "+ usuario);

}
saludar("KArlos");
saludar();
*/
/*
const juego = () => {

    let usuario_1 = prompt("PIEDRA,PAPEL O TIJERAS").toLowerCase() ;
    let usuario_2 = prompt("PIEDRA, PAPEL O TIJERAS").toLowerCase();

    if(usuario_1 === "piedra" && usuario_2 === "papel"){
        console.log("Gana Usuario 2");
    }else if (usuario_2 === "piedra" && usuario_1 === "papel"){
        console.log ("Gana Usuario 1");
    }else if (usuario_1 === "papel" && usuario_2 === "tijeras"){
        console.log("Gana Usuario 2");
    }else if(usuario_2 == "papel" && usuario_1 === "tijeras"){
        console.log("Gana Usuario 1");
    }else if (usuario_1 === "piedra" && usuario_2 === "tijeras"){
        console.log("Gana Usuario 1");
    }else if (usuario_1 === "tijeras" && usuario_2 === "piedra"){
        console.log("Gana Usuario 2");
    }else if (usuario_2 === "piedra" && usuario_1 === "piedra") {
        console.log("Empate")
    }else if (usuario_1 === "tijeras" && usuario_2 === "tijeras"){
        console.log("Empate")
    }else if (usuario_2 === "papel" && usuario_1 === "papel"){
        console.log("Empate")
    }else{
        console.log("Comando no valido")
    }

}

juego();

*/
/*
const ciclo = ( ) => {

    for( let i = 0; i<=10; i++){
        console.log(i);
    }
}
ciclo ();

const ciclo_2 = (x=1, y=10, z=1) => {

    for(let i = x; i <= y; i=i+z){
        console.log(i);
    }

}
ciclo_2(2,20,2);
*/
/*
const tablas = (x=1, y=10, w=1) => {

    for (let i = x; i<=y; i=i+w){
        console.log(i);
            for (let z = 1; z<=10 ; z=z+w){
              console.log(i +"*" +z+"="+z*i);
            }   
    }

}

tablas(5,5,1);
*/

const nuevaSuma = (a, b )=>{
    return a+b;
}


const nuevaResta = (a , b) => {
    return a-b;      
}


const multi = (a , b) => {
    console.log(a * b);
}
multi(nuevaSuma(3,1), nuevaResta(6,1));