const movie = [
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
    "Homen Aranha 1",
    "Homen Aranha 2",
    "Homen Aranha 3",
    "Divergente",
    "Convergente",
    "Animais Fantasticos e onde habitam",
    "Animais Fantasticos e os crimes de Grindelwald",
    "Thor",
    "Thor: O mundo das Trevas",
    "Thor: Ragnarok",
    "Vingadores",
    "Vingadores A Era de Ultron",
    "Vingadores Guerra infinita",
    "Vingadores Ultimato",
    "Batman vs Superman",
    "Batman O Cavaleiro das Trevas",
    "flash",
    "Homen de Ferro",
    "Homen de Ferro 2",
    "Homen de Ferro 3",
    "Crepusculo",
    "Lua nova",
    "Eclipse",
    "Amanhecer",
    "Amanhecer 2",
    "Jogos Vorazes",
    "Jogos Vorazes Em chamas",
    "Jogos Vorazes A esperança Parte 1",
    "Jogos Vorazes A esperança Final",
    "Como eu era antes de você",
    "A culpa é das Estrelas",
    "Homem ao mar",
    "1917",
    "Velozes e furiosos 1",
    "Velozes e furiosos 2",
    "Velozes e furiosos 3",
    "Velozes e furiosos 4",
    "Velozes e furiosos 5",
    "Velozes e furiosos 6",
    "Velozes e furiosos 7",
    "Velozes e furiosos 8",
    "Estrelas além do tempo",
    "Conde de Monte Cristo",
    "Gente Grande",
    "Gente Grande 2",
    "Guerra Civil",
    "Piratas do Caribe"
]
const food = [
    "Pizza",
    "Lasanha",
    "Sanduiche",
    "Brigadeiro",
    "Sushi",
    "Torta"
]
const drinks = [
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
    const filme = movie[getRandomIntInclusive(0,movie.length-1)]
    const generate = document.getElementById('movie')
    generate.innerHTML= filme
}

function gerarComida(id){
    const comida = food[getRandomIntInclusive(0,food.length-1)]
    const generate = document.getElementById('food')
    generate.innerHTML= comida
}

function gerarBebida(id){
    const bebida = drinks[getRandomIntInclusive(0,drinks.length-1)]
    const generate = document.getElementById('drink')
    generate.innerHTML= bebida
}
