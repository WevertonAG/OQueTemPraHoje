function animar (){
 // aqui vai animar algo    
}


const Filmes = []
const Comidas = []
const Bebidas = []


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarFilme(id){
    
    console.log(getRandomIntInclusive(1,15),'aqui vai gerar filmes')
}

function gerarComida(id){
    console.log(getRandomIntInclusive(1,6),'aqui vai gerar comida ')
}

function gerarBebida(id){
    console.log(getRandomIntInclusive(1,3),'Aqui vai gerar bebida')
}
