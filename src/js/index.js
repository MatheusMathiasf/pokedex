// quando clicar no pokemon da listagem temos que esconder o cartao do pokemon
// aberto e mostrar o cartao correspondente ao que foi selecionado na listagem

// pra isso vamos precisar trabalhar com dois elementos
// 1- listagem
// 2 - cartao do pokemon

// precisamos criar duas variaveis no 15 pra trabalhar com os elementos da tela
// vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem
// de pokemons

// -remover a classe aberto so do cartao que esta aberto
// -ao clicar em um pokemon da listagem pegambs o id desse pokemon pra saber qual cartao mostrar
// -remover a classe ativo que marca o pokemon selecionado
// -Adicionar a classe ativo no item da lista selecionado

// criar duas variaveis no js para trabalhar com os elementos da tela
const listaDeselecao = document.querySelectorAll('.pokemon');
const pokemonCard = document.querySelectorAll('.cartao-pokemon');

listaDeselecao.forEach(pokemon => {

    // evento de click
    pokemon.addEventListener('click', () => {

        // remover classe aberta
        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto');

        // adicionar   aberto
        const idPokemon = pokemon.attributes.id.value;

        const idCartaoPokemonAbrir = 'cartao-' + idPokemon
        const cartaoPokemonAbrir = document.getElementById(idCartaoPokemonAbrir);
        cartaoPokemonAbrir.classList.add('aberto');

        // remover a classe ativo para marcação
        const pokemonAtivoNaListagem = document.querySelector('.ativo');
        pokemonAtivoNaListagem.classList.remove('ativo');

        // Adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemon);
        pokemonSelecionadoNaListagem.classList.add('ativo');

    });
})