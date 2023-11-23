const numeroRandom = () => {
    return Math.floor(Math.random() * 100) + 1; 
}; 

const verificador = (random, valorUsuario) => {
    if(valorUsuario > random) {
        console.log("el numero debe ser mas chico"); 
    }

    else if (valorUsuario < random) {
        console.log("el numero debe ser mas grande"); 
    }

    else {
        console.log("FELICIDADES! adivinaste"); 
    }
}; 

module.exports = {
    numeroRandom,
    verificador 
}; 