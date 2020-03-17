// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

// mostrar los datos en la pantalla
const dataPokemon = document.getElementById('data_Pokemon');

const typesPokemon = (arrPokemon) => {
  let styleTypePokemon = '';
  for (let i = 0; i < arrPokemon.length; i += 1) {
    styleTypePokemon += `<span class="type_Text pok_type_${arrPokemon[i]}">${arrPokemon[i]}</span>`;
  }
  return styleTypePokemon;
};

const allPokemon = () => {
  let infoPokemon = '';
  data.pokemon.forEach((obj) => {
    infoPokemon += `
    <div class = "info_Pokemon">
        <img src="${obj.img}">
        <p class="num_Pokemon">#${obj.num}</p>
        <h5>${obj.name[0].toUpperCase()}${obj.name.substring(1)}</h5>
        <p>${typesPokemon(obj.type)}</p>
    </div>
    `;
  });
  return infoPokemon;
};

dataPokemon.innerHTML = allPokemon();
