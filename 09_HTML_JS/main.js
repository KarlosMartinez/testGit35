let titulo = document.getElementById('titulo');
let cambiar = document.getElementById('changeJS');
let text_change = document.getElementById('text_change');
let button = document.getElementById('button');





//elementos del formularios
let nombre = document.getElementById('nombre');
let email = document.getElementById ('email');
let password = document.getElementById ('password');
let enviar = document.getElementById ('enviar');
let valor1 = document.getElementById ('valor1');
let valor2 = document.getElementById ('valor2');
let valor3 = document.getElementById ('valor3');

//seccion validar
let validar = document.getElementById ('validar');

/*
aqui se declara en un avraiable para poder ejecutarlo y no tenerlo como incognita
----let titulo = document.getElementById('titulo');

aqui se ejecuta el cambio del contenido
----titulo.innerHTML = "Hola, desde JS";
*/


//console.log(titulo);
//console.log(cambiar);
/*
titulo.innerHTML = "Hola, desde JS";
cambiar.innerHTML = "Cambio desde JS!!!!";

const nuevoTexto = () =>{

    text_change.innerHTML = "Texto Cambiado!!!!";
}

button.addEventListener('click', nuevoTexto);
*/

const formulario = () => {
    let valorNombre = nombre.value;
    let valorEmail = email.value;
    let valorPassword = password.value;

    valor1.innerHTML = valorNombre;
    valor2.innerHTML = valorEmail;
    valor3.innerHTML = valorPassword;
    

    let nombreCorrecto = "Juan";
    let correoCorrecto = "a@a.com";
    let passwordCorrecto = "XD";

    if (valorNombre === nombreCorrecto && valorEmail === correoCorrecto && valorPassword === passwordCorrecto){

        validar.innerHTML = "Bienvenido";
    }else{
        validar.innerHTML = "Nombre y/o Contraseña incorrectos, Vuelve a intentarlo"
    }
    console.log(passwordCorrecto);
}
 enviar.addEventListener('click', formulario);



