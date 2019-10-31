//for (let i = 0; i<=100; i=i+1){
//console.log(i);
//}

//empiece en 10 y termine en 1000 y vaya de 5 en 5
/*
for (let i =  10; i<=1000; i = i + 5){
console.log(i);
}

//empiece en 500, termine en 0 y vaya de 2 en 2

for(let i = 500; i>=0; i = i - 2){
console.log(i);
}

// empiece en -763 tewrmine en 15 y vaya de 3 en 3

for(let i = -763; i<=15; i = i + 3){
console.log(i);
}
*/
/*
for (let i = 1; i<=100;i++){
    if (i % 3 === 0 && i % 5 === 0  ){
        console.log(i + "fizzBuzz");
    }else if (i % 3 ===0 ){
        console.log(i +"Fizz");
    }else if  (i % 5 === 0){
        console.log(i +"Buzz" );
    } else{
        console.log(i);
    }
    } 
*/

    //imprimir en console tablas del 1*1 hasta el 10*10

    for (let i = 1;i<=10;i++){
        console.log(i);
            for (let z = 1; z<=10; z++){
              console.log(i +"*" +z+"="+z*i);
            }   
    }