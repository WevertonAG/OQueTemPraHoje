const filmes = [
    "Harry Potter e a Pedra Filosofal",
    "Harry Potter e a Câmara Secreta",
    "Harry Potter e o Prisioneiro de Azkaban",
    "Harry Potter e o Cálice de Fogo",
    "Harry Potter e a Ordem da Fenix",
    "Harry Potter e o Enigma do Principe",
    "Harry Potter e as Relíquias da Morte Parte 1",
    "Harry Potter e as Relíquias da Morte Parte 2",
    "Homen Aranha de Volta ao Lar",
    "Homen Aranha Longe de casa",
    "Homen Aranha Sem volta pra casa",
    "Divergente",
    "Convergente",
    "Animais Fantasticos e onde habitam",
    "Animais Fantasticos e os crimes de Grindelwald",
    "Thor",
    "Homen de Ferro",
    "Crepusculo",
    "Lua nova",
    "Eclipse",
    "Amanhecer"
]
const comidas = [
    "Pizza",
    "Lasanha",
    "Sanduiche",
    "Brigadeiro",
    "Sushi",
    "Torta"
]
const bebidas = [
    "Agua com Gás",
    "Suco",
    "Limonada",
    "Vinho",
    "Refrigerante",

]


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarFilme(id){
    const filme = filmes[getRandomIntInclusive(0,filmes.length-1)]
    const movie = document.getElementById('movie')
    movie.innerHTML= filme
}

function gerarComida(id){
    const comida = comidas[getRandomIntInclusive(0,comidas.length-1)]
    const food = document.getElementById('food')
    food.innerHTML= comida
}

function gerarBebida(id){
    const bebida = bebidas[getRandomIntInclusive(0,bebidas.length-1)]
    const drink = document.getElementById('drink')
    drink.innerHTML= bebida
}
