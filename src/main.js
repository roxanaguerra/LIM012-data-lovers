// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

// mostrar los datos en la pantalla
const dataPokemon = document.getElementById('pokemon_Data');

const typesPokemon = (arrPokemon) => {
  let linepok = '';
  for (let i = 0; i < arrPokemon.length; i += 1) {
    linepok += `<span class="typtext pok_type_${arrPokemon[i]}">${arrPokemon[i]}</span>`;
  }
  return linepok;
};

const allPokemon = () => {
  let info = '';
  data.pokemon.forEach((obj) => {
    info += `
    <div class = "pokemonInfo">
        <img src="${obj.img}">
        <p class="pokemonnum">#${obj.num}</p>
        <h5>${obj.name[0].toUpperCase()}${obj.name.substring(1)}</h5>
        <p>${typesPokemon(obj.type)}</p>
    </div>
    `;
  });
  return info;
};

dataPokemon.innerHTML = allPokemon();
