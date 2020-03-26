/* eslint-disable eol-last */
import {
  textUpperFirst,
  filterData,
  sortData,
} from './data.js';
import data from './data/pokemon/pokemon.js';

const dataPokemon = document.getElementById('data_Pokemon');
const selectFilter = document.querySelectorAll('.select_filter');

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
        <h5>${textUpperFirst(obj.name)}</h5>
        <p>${typesPokemon(obj.type)}</p>
    </div>
    `;
  });
  return infoPokemon;
};
// funcion para llamar a filtro por tipo
selectFilter[0].addEventListener('change', () => {
  const valueSelect = selectFilter;
  dataPokemon.innerHTML = allPokemon(filterData(data.pokemon, valueSelect));
});
// funcion para llamar a filtro por egg
selectFilter[1].addEventListener('change', () => {
  const valueSelect = selectFilter;
  dataPokemon.innerHTML = allPokemon(filterData(data.pokemon, valueSelect));
});

// funcion para llamar a filtro por region
selectFilter[2].addEventListener('change', () => {
  const valueSelect = selectFilter;
  dataPokemon.innerHTML = allPokemon(filterData(data.pokemon, valueSelect));
});

// ORDENAR LOS POKEMONES
const orderAlfabetic = document.querySelector('#select_order');
orderAlfabetic.addEventListener('change', () => {
  const orderSelect = orderAlfabetic.value;
  dataPokemon.innerHTML = allPokemon(sortData(data.pokemon, 'name', orderSelect));
});

dataPokemon.innerHTML = allPokemon(data.pokemon);