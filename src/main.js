/* eslint-disable eol-last */
import {
  filterData,
  sortData,
} from './data.js';
import data from './data/pokemon/pokemon.js';

const dataPokemon = document.getElementById('data_Pokemon');
const selectType = document.getElementById('select_type');
const selectEgg = document.getElementById('select_egg');
const selectRegion = document.getElementById('select_region');

// mostrar los tipos de egg que tiene un pokemon
const fillSelectEgg = () => {
  let infoSelectEgg = '<option value=\'\'>Egg x Km</option>';
  data.pokemon.forEach((element) => {
    infoSelectEgg += `<option value="${element.egg}">${element.egg}</option>`;
    //console.log(infoSelectEgg);
  });
  //7console.log(infoSelectEgg);
}

// cargar datos del arreglo types
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
    dataPokemon.innerHTML = allPokemon(filterData(data.pokemon, valueSelect, 1));
  }
});

selectEgg.addEventListener('change', () => {
  const valueSelect = selectEgg.value;
  if (valueSelect !== '') {
    dataPokemon.innerHTML = allPokemon(filterData(data.pokemon, valueSelect, 2));
  }
});

selectRegion.addEventListener('change', () => {
  const valueSelect = selectRegion.value;
  if (valueSelect !== '') {
    dataPokemon.innerHTML = allPokemon(filterData(data.pokemon, valueSelect, 3));
  }
});

// ORDENAR LOS POKEMONES
const orderAlfabetic = document.querySelector('#select_order');
orderAlfabetic.addEventListener('change', () => {
  const orderSelect = orderAlfabetic.value;
  dataPokemon.innerHTML = allPokemon(sortData(data.pokemon, 'name', orderSelect));
});

dataPokemon.innerHTML = allPokemon(data.pokemon);