/* eslint-disable eol-last */
import {
  textUpperFirst,
  filterData,
  sortData,
  searchName,
  calcMoves,
} from './data.js';
import data from './data/pokemon/pokemon.js';

const dataPokemon = document.getElementById('data_Pokemon');
const selectFilter = document.querySelectorAll('.select_filter');
const searchForName = document.getElementById('search_name');
const sectionDetail = document.getElementById('section_detail');
const selectors = document.getElementById('selectors');

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
  const Isname = (DataEvolution.name ? textUpperFirst(DataEvolution.name) : '');
  let Iscandy;
  let DetailEvolution = '';
  if (DataEvolution['candy-cost']) {
    Iscandy = `candy ${DataEvolution['candy-cost']}`;
  } else {
    Iscandy = '';
  }
  DetailEvolution += `
  <div>
      <div class="show-evolution">
      <p>${DataEvolution.num} ${Isname}</p>
      <img class="imgMin" data-id="${DataEvolution.num}" src="${rootImg}${DataEvolution.num}${extImg}">
      <p>${Iscandy}</p>
      </div>
  </div>
  `;
  return DetailEvolution;
};

// mostrar detalle de evoluciones puede ser next o prev
// primero verifica que exista evoluciones
// si hay evoluciones muestra las previas despues las siguientes
const ShowEvolution = (objEvolution, datnum) => {
  const arrNextEvol = objEvolution['next-evolution'];
  const arrPrevEvol = objEvolution['prev-evolution'];
  let DetailEvolution = '';
  if (typeof (arrPrevEvol) === 'undefined' && typeof (arrNextEvol) === 'undefined') {
    DetailEvolution = '<p>Pokemon no evolutions</p>';
  } else {
    if (typeof (arrPrevEvol) !== 'undefined') {
      if (Array.isArray(arrPrevEvol[0]['prev-evolution'])) {
        const arrPrev2 = arrPrevEvol[0]['prev-evolution'][0];
        DetailEvolution = ShowDataEvolution(arrPrev2);
      }
      DetailEvolution += ShowDataEvolution(arrPrevEvol[0]);
    }
    DetailEvolution += ShowDataEvolution({ num: datnum, name: '', 'candy-cost': '' });
    if (typeof (arrNextEvol) !== 'undefined') {
      if (arrNextEvol.length > 1) {
        arrNextEvol.forEach((element) => { DetailEvolution += ShowDataEvolution(element); });
      } else {
        DetailEvolution += ShowDataEvolution(arrNextEvol[0]);
        if (Array.isArray(arrNextEvol[0]['next-evolution'])) {
          const arrNext2 = arrNextEvol[0]['next-evolution'][0];
          DetailEvolution += ShowDataEvolution(arrNext2);
        }
      } // fin de arrNextEvol=undefined
    } // fin de else
  }
  return DetailEvolution;
}; // fin de funcion ShowEvolution

// funcion muestra detalle de los movimientos
// funcion calcMoves envia el arreglo para realizar los calculos
const ShowMoves = (arrMoves, arrtype) => {
  let DetailMoves = '';
  const resumen = calcMoves(arrMoves, arrtype);
  arrMoves.forEach((element, index) => {
    DetailMoves += `
    <tr>
      <td><h4>${textUpperFirst(element.name)}</h4> <p class="type_Text pok_type_${element.type}">${element.type}</p></td>
      <td>${element['base-damage']}</td>
      <td>${resumen[index].eps.toFixed(1)}</td>
      <td>${resumen[index].dps.toFixed(1)}</td>  
    </tr>
    `;
  });
  return DetailMoves;
};

// mostrar detalle de los pokemons
const ShowDetailPokemon = (objPokemon) => {
  let DetailPokemon = '';
  DetailPokemon += `
  <button id="btn_back" onclick="location.reload()">BACK</button>  
    <section class="row">
      <div class = "col-3 section_info">
          <img id="${objPokemon.num}" class="imgShowPokemon" src="${objPokemon.img}">
          <p class="num_Pokemon">#${objPokemon.num}</p>
          <h5>${textUpperFirst(objPokemon.name)}</h5>
          <p>${typesPokemon(objPokemon.type)}</p>
      </div>
      <div class="col-7 secdet_pokdatos">
        <header><strong>Data</strong></header>
        <p>${objPokemon.about}</p>
        <span>
          <img src="img/location.png" class="icon-data"><strong> Region: </strong> ${objPokemon.generation.name}
           <img src="img/icon-height.png" class="icon-data"><strong> Height: </strong> ${objPokemon.size.height}
           <img src="img/icon-weight.png" class="icon-data"><strong> Widht: </strong> ${objPokemon.size.weight} 
        </span>
        <h3><img src="img/icon-vulne.png" class="icon-data">  Vulnerable</h3>
        <p>${typesPokemon(objPokemon.weaknesses)}</p>
        <h3><img src="img/icon-resis.png" class="icon-data">  Resistant</h3>
        <p>${typesPokemon(objPokemon.resistant)}</p>
      </div>
    </section>
    <section class="row">
      <header><strong>Stats</strong></header>
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
            <td>${Math.round(objPokemon['spawn-chance'] * 100)}%</td>
          </tr>
          <tr>
            <td>Capture rate</td>
            <td>${Math.round(objPokemon.encounter['base-capture-rate'] * 100)}%</td>
          </tr>
          <tr>
            <td>Flee rate</td>
            <td>${Math.round(objPokemon.encounter['base-flee-rate'] * 100)}%</td>
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
      <header><strong>Evolution</strong></header>
      <div class="section-evolution">${ShowEvolution(objPokemon.evolution, objPokemon.num)}</div>      
    </section>
    <section class="row">
      <header><h3>All Moves</h3></header>
      <table class="col-12 move">
        <tbody>
          <tr>
            <td><h4>Quick Moves</h4></td>
            <td><h5>Damage<h5></td>
            <td><h5>EPS<h5></td>
            <td><h5>DPS<h5></td>
          </tr>
          ${ShowMoves(objPokemon['quick-move'], objPokemon.type)}
        </tbody>
      </table>
      <table class="col-12 move">
        <tbody>
          <tr>
            <td><h4>Special Attack</h4></td>
            <td><h5>Damage<h5></td>
            <td><h5>EPS<h5></td>
            <td><h5>DPS<h5></td>
          </tr>
          ${ShowMoves(objPokemon['special-attack'], objPokemon.type)}
        </tbody>
      </table>
    </section>    
    <button id="btn_back" onclick="location.reload()">BACK</button>
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
    // evento click para mostrar detalle pokemon
    divNewInfoPokemon.querySelector('.imgShowPokemon').addEventListener('click', (event) => {
      event.preventDefault();
      selectors.classList.add('hide');
      dataPokemon.classList.add('hide');
      ShowDetailPokemon(obj);
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
