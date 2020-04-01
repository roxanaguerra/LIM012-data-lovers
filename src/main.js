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
const sectionDetail = document.getElementById('section_detail');
const selectors = document.getElementById('selectors');
const btnback = document.getElementById('btn_back');

// cargar datos del arreglo types
const typesPokemon = (arrTypePokemon) => {
  let styleTypePokemon = '';
  for (let i = 0; i < arrTypePokemon.length; i += 1) {
    styleTypePokemon += `<span class="type_Text pok_type_${arrTypePokemon[i]}">${textUpperFirst(arrTypePokemon[i])}</span>`;
  }
  return styleTypePokemon;
};

// mostrar datos de evolucion: num, name, candy-cost y si hay caramelos especiales
// dataImg guarda la ruta de las imagenes
// itemEvol caramelo adicional para evolucion es una propiedad de DataEvolution
const ShowDataEvolution = (DataEvolution) => {
  const dataImg = data.pokemon[0].img;
  const rootImg = dataImg.substring(0, dataImg.length - 7);
  const extImg = dataImg.slice(dataImg.length - 4);
  let DetailEvolution = '';
  DetailEvolution += `
  <div>
    <div>
      <span>${DataEvolution.num} ${textUpperFirst(DataEvolution.name)}</span>
      <img class="imgMin" src="${rootImg}${DataEvolution.num}${extImg}">
      <span>candy ${DataEvolution['candy-cost']}</span>
      </div>
  </div>
  `;
  return DetailEvolution;
};

// mostrar detalle de evoluciones puede ser next o prev
const ShowEvolution = (objEvolution) => {
  const arrNextEvol = objEvolution['next-evolution'];
  const arrPrevEvol = objEvolution['prev-evolution'];
  let DetailEvolution = '';
  if (typeof (arrPrevEvol) === 'undefined' && typeof (arrNextEvol) === 'undefined') {
    DetailEvolution = '<p>Pokemon no evolutions</p>';
  } else {
// pre evoluciones puede tener longitud mayor a 1 ???????
    if (typeof (arrPrevEvol) !== 'undefined') {
      DetailEvolution = ShowDataEvolution(arrPrevEvol[0]);
      if (Array.isArray(arrPrevEvol[0]['prev-evolution'])) {
        DetailEvolution += ShowDataEvolution(arrPrevEvol[0]['prev-evolution'][0]);
      }
    }
    if (typeof (arrNextEvol) !== 'undefined') {
      if (arrNextEvol.length > 1) {
        arrNextEvol.forEach((element) => { DetailEvolution += ShowDataEvolution(element); });
      } else {
        DetailEvolution = ShowDataEvolution(arrNextEvol[0]);
        if (Array.isArray(arrNextEvol[0]['next-evolution'])) {
          const arrNext2 = arrNextEvol[0]['next-evolution'][0];
          DetailEvolution += ShowDataEvolution(arrNext2);
        }
      } // fin de arrNextEvol=undefined
    } // fin de else
  }
  return DetailEvolution;
}; // fin de funcion ShowEvolution

// mostrar detalle de los pokemons
const ShowDetailPokemon = (objPokemon) => {
  let DetailPokemon = '';
  DetailPokemon += `
    <section class="row">
      <div class = "col-3 info_Pokemon">
          <img id="${objPokemon.num}" class="imgShowPokemon" src="${objPokemon.img}">
          <p class="num_Pokemon">#${objPokemon.num}</p>
          <h5>${textUpperFirst(objPokemon.name)}</h5>
          <p>${typesPokemon(objPokemon.type)}</p>
      </div>
      <div class="col-9">
        <header>Data</header>
        <p>${objPokemon.about}</p>
        <p>Region: ${objPokemon.generation.name} Height: ${objPokemon.size.height} Weight: ${objPokemon.size.weight}</p>
        <h3>Vulnerable</h3>
        <p>${typesPokemon(objPokemon.weaknesses)}</p>
        <h3>Resistant</h3>
        <p>${typesPokemon(objPokemon.resistant)}</p>
      </div>
    </section>
    <section class="row">
      <header>Stats</header>
      <table class="col-6">
        <tbody>
          <tr>
            <td>Max CP</td>
            <td>${objPokemon.stats['max-cp']}</td>
          </tr>
          <tr>
            <td>Max HP</td>
            <td>${objPokemon.stats['max-hp']}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>${objPokemon.stats['base-attack']}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>${objPokemon.stats['base-defense']}</td>
          </tr>
          <tr>
            <td>Stamina</td>
            <td>${objPokemon.stats['base-stamina']}</td>
          </tr>
        </tbody>
      </table>
      <table class="col-6">
        <tbody>
          <tr>
            <td>Chance</td>
            <td>${objPokemon['spawn-chance'] * 100}%</td>
          </tr>
          <tr>
            <td>Capture rate</td>
            <td>${objPokemon.encounter['base-capture-rate'] * 100}%</td>
          </tr>
          <tr>
            <td>Flee rate</td>
            <td>${objPokemon.encounter['base-flee-rate'] * 100}%</td>
          </tr>
          <tr>
            <td>Buddy walk</td>
            <td>${objPokemon['buddy-distance-km']}</td>
          </tr>
          <tr>
            <td>Egg</td>
            <td>${objPokemon.egg}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="row">
      <header>Evolution</header>
      ${ShowEvolution(objPokemon.evolution)}
    </section>
    <section class="row">
      <header>All Moves</header>
    </section>
  `;
  sectionDetail.innerHTML = DetailPokemon;
};

// mostrar los datos en la pantalla
const allPokemon = (arrPokemon) => {
  dataPokemon.innerHTML = '';
  arrPokemon.forEach((obj) => {
    const divNewInfoPokemon = document.createElement('div');
    divNewInfoPokemon.setAttribute('class', 'info_Pokemon');
    divNewInfoPokemon.innerHTML += `
        <img id="${obj.num}" class="imgShowPokemon" src="${obj.img}"></a>
        <p class="num_Pokemon">#${obj.num}</p>
        <h5>${textUpperFirst(obj.name)}</h5>
        <p>${typesPokemon(obj.type)}</p>
    `;
    //evento click para mostrar detalle pokemon
    // console.log(divNewInfoPokemon.querySelector('.imgShowPokemon'));
    divNewInfoPokemon.querySelector('.imgShowPokemon').addEventListener('click', (event) => {
      event.preventDefault();
      selectors.classList.add('hide');
      dataPokemon.classList.add('hide');
      // sectionDetail.classList.remove('hide');
      ShowDetailPokemon(obj);
      btnback.addEventListener('click', () => {
        sectionDetail.classList.add('hide');
        selectors.classList.remove('hide');
        dataPokemon.classList.remove('hide');
        sectionDetail.innerHTML = '';
      });
    }); // fin de click
    dataPokemon.appendChild(divNewInfoPokemon);
  }); // fin de foreach
};

// funcion para llamar a filtro por tipo
selectFilter[0].addEventListener('change', () => {
  const valueSelect = selectFilter;
  allPokemon(filterData(data.pokemon, valueSelect));
});

// funcion para llamar a filtro por egg
selectFilter[1].addEventListener('change', () => {
  const valueSelect = selectFilter;
  allPokemon(filterData(data.pokemon, valueSelect));
});

// funcion para llamar a filtro por region
selectFilter[2].addEventListener('change', () => {
  const valueSelect = selectFilter;
  allPokemon(filterData(data.pokemon, valueSelect));
});

// ORDENAR LOS POKEMONES
const orderAlfabetic = document.querySelector('#select_order');
orderAlfabetic.addEventListener('change', () => {
  const orderSelect = orderAlfabetic.value;
  allPokemon(sortData(data.pokemon, orderSelect));
});

// BUSCAR UN POKEMON POR SU NOMBRE
searchForName.addEventListener('keyup', () => {
  const inputText = searchForName.value.toLowerCase();
  allPokemon(searchName(data.pokemon, 'name', inputText));
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

allPokemon(data.pokemon);
// que solo me muestre num de pokemon y pre evoluciones
const arreglo = data.pokemon.filter(element => element.evolution['prev-evolution']);

// const arreglo = data.pokemon.map(element => `${element.num} ${element.evolution['prev-evolution']} ${element.evolution['prev-evolution']}`);

console.log(arreglo);

// console.log(data.pokemon[0]);
// object.values(element.evolution['prev-evolution']);
// array.isArray(arreglo);

// console.log(data.pokemon[0]);
// ShowDetailPokemon(data.pokemon[5]);
