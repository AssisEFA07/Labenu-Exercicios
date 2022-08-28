const pokemons = [
    { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
    { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
    { nome: 'Charmander', tipo: 'fogo', vida: 35 },
    { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
    { nome: 'Squirtle', tipo: 'água', vida: 45 },
    { nome: 'Psyduck', tipo: 'água', vida: 25 },
  ]

 //1 passo : acessar um elemento do array; acesso por meio do indice

//  console.log(pokemons[0]); 
//  console.log(pokemons[2]);

 // 2 passo : do array dado, selecionar os a chave nome dos objetos constituintes do array.

 const nomeDosPokemons = pokemons.map((pokemon, indice, array)=> { //pokemon é cada elemento do array pokemons
   return pokemon.nome;
 });
 console.log("Aplicação MAP - selecionar nomes:",nomeDosPokemons); 

 const tipoDosPokemons = pokemons.map((pokemon, indice, array)=>{
    return pokemon.tipo;
 });
console.log("Aplicação MAP - selecionar o tipo: ",tipoDosPokemons);

// usando filter para filtrar certos elementos do array

const pokemonsTipoGrama = pokemons.filter((pokemon, indice, array)=>{
    return pokemon.tipo === 'grama';
});

console.log("Aplicação Filter - selecionar um tipo específico entre os elementos:",pokemonsTipoGrama); 

// usando filter para separar os pokemons com vida acima de 30

const vidaAcimaDe30 = pokemons.filter((pokemon, indice, array)=>{
    return pokemon.vida >= 30;
});

console.log(vidaAcimaDe30); 

function vidaCheia (pokemon){ // será uma função de callback
    // return {
    // nome : pokemon.nome,
    // tipo : pokemon.tipo,
    // vida : 100
    // }

    return {...pokemon, vida : 100}
};

const pika = {
    nome : "pikachu",
    tipo : "eletrico",
    vida : 22,
}

console.log(vidaCheia(pika));  // a função vida cheia funciona. 

// b  - encher a vida d etodos os pokemons via MAP

const pokemonsVidaCheia = pokemons.map(vidaCheia); //peguei o array original (pokemons) e modifiquei. Guardei o array novo (pokemonsvidacheia) na variável declarada. 

console.log(pokemonsVidaCheia); 

const pokemonsDeFogo = pokemons.filter(function (pokemon, indice, array) {
    return pokemon.tipo === 'fogo'; 
}); 

console.log("Aplicação Filter - Selecionando um tipo específico",pokemonsDeFogo); 

const pokemonsDeFogoB = pokemonsVidaCheia.filter(function (pokemon, indice, array) {
    return pokemon.tipo === 'fogo'; 
}); 

console.log("Aplicação Filter - Selecionando um tipo específico",pokemonsDeFogoB); 