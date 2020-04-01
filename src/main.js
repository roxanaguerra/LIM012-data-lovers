/* eslint-disable eol-last */
import {
  textUpperFirst,
  filterData,
  sortData,
  searchName,
} from './data.js';
import data from './data/pokemon/pokemon.js';

// const conteiner1 = document.getElementById('conteiner1');
// const allInfoPokemon = document.getElementById('conteiner2');
const dataPokemon = document.getElementById('data_Pokemon');
const selectFilter = document.querySelectorAll('.select_filter');
const searchForName = document.getElementById('search_name');

const typesPokemon = (arrTypePokemon) => {
  let styleTypePokemon = '';
  for (let i = 0; i < arrTypePokemon.length; i += 1) {
    styleTypePokemon += `<span class="type_Text pok_type_${arrTypePokemon[i]}">${textUpperFirst(arrTypePokemon[i])}</span>`;
  }
  return styleTypePokemon;
};

// mostrar los datos en la pantalla
const allPokemon = (arrPokemon) => {
  let infoPokemon = '';
  arrPokemon.forEach((obj) => {
    infoPokemon += `
    <div class = "info_Pokemon">
        <a class="img_info2"><img src="${obj.img}" onClick="alert('probando')" id="${obj.num}"></a>
        <p class="num_Pokemon">#${obj.num}</p>
        <h5>${textUpperFirst(obj.name)}</h5>
        <p>${typesPokemon(obj.type)}</p>
    </div>
    `;
  });
  return infoPokemon;
};

// PROBANDO MOSTRAR CONTENEDOR 2


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
  dataPokemon.innerHTML = allPokemon(sortData(data.pokemon, orderSelect));
});
dataPokemon.innerHTML = allPokemon(data.pokemon);

// BUSCAR UN POKEMON POR SU NOMBRE
searchForName.addEventListener('keyup', () => {
  const inputText = searchForName.value.toLowerCase();
  dataPokemon.innerHTML = allPokemon(searchName(data.pokemon, 'name', inputText));
  if (dataPokemon.innerHTML === '') {
    dataPokemon.innerHTML = `
    <div class = "nameNotExit">
        <p class="message">SORRY, NOT RESULTS FOUND</p>    
        <img src="img/no search.gif" id="img_NoSearch">       
        <p class="message"> * Sorry we couldn't find any matches.</p>
        <p class="message">* Make sure the spelling is correct.</p>
        <p class="message">* Use less keywords.</p>
    </div>
    `;
  }
});
