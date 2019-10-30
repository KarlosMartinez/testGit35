/*if(condicion){
    comandos...
}else if(condicion2){
comandos...
}*/

//ejemplo de if sencillo
/*let edad = 8;

if(edad === 18){
    console.log ("Eres MAYOR de edad");
}
else{
    console.log("Eres MENOR de edad")
}
*/
/*
//Ejercicio: Introdoce el usuario un numero y esl sistema dice si es PAR o INPAR
let numero = prompt("Ingresa un numero")
 if (numero % 2 === 0){
     console.log("Es numero PAR")
 }else {
     console.log("Es numero INPAR")
 }
*/
/*
let dia = 0;

if (dia === 0){
    console.log("Lunes");
}else if (dia === 1){
    console.log("Martes");
}else if(dia === 2){
    console.log("Miercoles");
}else if (dia === 3){
    console.log("Jueves");
}else if (dia === 4){
    console.log("Viernes");
}else if (dia === 5){
    console.log("Sabado");
}else if (dia === 6){
    console.log("Domingo");
}else {
    console.log("No esxiste");
}*/
/*
let edad = prompt("Introduce tu edad");

if (edad>=18 && edad){
    console.log("Eres mayor de edad Necesitas LIcencia de Conducir");
}else if(edad>=16){
    console.log("Necesitas Permiso para conducir");
}else if(edad < 16 || edad > 70){
    console.log("No Puedes Conducir")
} 
*/
/*
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
    */

 let pass = prompt("Introduce la Contraseña");
 
 if (pass === "perritoSalchicha123"){
     console.log("Bienvenido Password Cotrrecto");
 }else {
     console.error("Password Incorrecto, Recarga la Página y vuelve a intentarlo ");
 }
