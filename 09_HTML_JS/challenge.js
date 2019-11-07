let respuesta = document.getElementById ('respuesta');
let b_enviar = document.getElementById('b_enviar');
let valor = document.getElementById('valor');
let pinia = document.getElementById('pinia');
let peperoni = document.getElementById('peperoni')

const pizza = () => {
        let valorRespuesta = respuesta.value;
        valor.innerHTML = valorRespuesta;

        let valorSI = "si";
        
        if (valorRespuesta === valorSI){
                
               valor.innerHTML="Te Gusta la PIZZA CON PIÑA";
               peperoni.classList.add('d-none');
               // document.getElementById('no_pinia').classList.remove('d-none');
                
        }else{
              //  document.getElementById('').classList.add('d-none');
                valor.innerHTML = "NO TE GUSTA LA PIZZA CON PIÑA :(D";
                pinia.classList.add('d-none');
             
        }

}


b_enviar.addEventListener('click', pizza);

/* jason  */

let datos = {

}