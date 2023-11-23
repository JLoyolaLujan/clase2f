// voy a testear primero el programa usando ventanas modales

/*
const rando = () => {
    let numberUser; 
    let rand; 
    while(true) {
        numberUser = prompt("ingrese un numero del 1 al 100"); 
        rand = Math.floor(Math.random() * 100) + 1; 

        if(numberUser > rand) {
            alert("el numero debe ser menor, sigue adivinando!"); 
        }
        else if (numberUser < rand) {
            alert("el numero debe ser mayor, sigue adivinando!"); 
        }
        else break; 
    }

    alert(`adivinaste! ${numberUser} y ${rand}`)
}

rando(); 
*/

// funca, ahora vamo a codea

const readlineSync = require('readline-sync');
const { numeroRandom, verificador } = require('./adivinanza');

const juego = () => {
    const numeroSecreto = numeroRandom(); 
    let valorUsuario = 0; 
    console.log("bienvenido al juego del 1 al 100!"); 
    console.log("adivine el numero! podra?"); 

    while(valorUsuario != numeroSecreto) {
        valorUsuario = readlineSync.question("ingrese su numero: "); 
        verificador(numeroSecreto, valorUsuario);
    }
};

juego();