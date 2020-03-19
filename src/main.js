/* eslint-disable eol-last */
import { filterData } from './data.js';
import data from './data/pokemon/pokemon.js';

const dataPokemon = document.getElementById('data_Pokemon');
const selectType = document.getElementById('select_type');

// mostrar los tipos qure tiene un pokemon
const typesPokemon = (arrTypePokemon) => {
  let styleTypePokemon = '';
  for (let i = 0; i < arrTypePokemon.length; i += 1) {
    styleTypePokemon += `<span class="type_Text pok_type_${arrTypePokemon[i]}">${arrTypePokemon[i]}</span>`;
  }
  return styleTypePokemon;
};
// mostrar los datos en la pantalla
const allPokemon = (arrPokemon) => {
  let infoPokemon = '';
  arrPokemon.forEach((obj) => {
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
// funcion para llamar a filtro
selectType.addEventListener('change', () => {
  const valueSelect = selectType.value;
  if (valueSelect !== '') {
    dataPokemon.innerHTML = allPokemon(filterData(data.pokemon, valueSelect));
  }
});

dataPokemon.innerHTML = allPokemon(data.pokemon);