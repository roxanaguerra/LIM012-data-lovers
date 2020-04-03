// Funcion devuelve texto con primer caracter en mayuscula y el resto minuscula
export const textUpperFirst = (text) => text.substring(0, 1).toUpperCase() + text.slice(1);

// Funcion para filtrar, recibe parametros data y condition
// devuelve un arreglo con el filtro por tipo, egg y region
export const filterData = (data, condition) => {
  const conditionType = condition[0].value;
  const conditionEgg = condition[1].value;
  const conditionRegion = condition[2].value;
  let arrFilter = data;
  if (conditionType !== '' && conditionType !== 'all') {
    arrFilter = arrFilter.filter((infoPokemon) => infoPokemon.type.indexOf(conditionType) !== -1);
  }
  if (conditionEgg !== '' && conditionEgg !== 'all') {
    arrFilter = arrFilter.filter((infoPokemon) => infoPokemon.egg === conditionEgg);
  }
  if (conditionRegion !== '' && conditionRegion !== 'all') {
    arrFilter = arrFilter.filter((infoPokemon) => infoPokemon.generation.name === conditionRegion);
  }
  return arrFilter;
};

// Funcion para ordenar alfabeticamente por nombre de pokemon
export const sortData = (data, sortOrder) => {
  let newDataOrder;
  switch (sortOrder) {
    case 'a-z':
      newDataOrder = data.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case 'z-a':
      newDataOrder = data.sort((a, b) => (a.name < b.name ? 1 : -1));
      break;
    case 'numUp': newDataOrder = data.sort((a, b) => (a.num > b.num ? 1 : -1));
      break;
    case 'numDown': newDataOrder = data.sort((a, b) => (a.num < b.num ? 1 : -1));
      break;
      /* no default */
  }
  return newDataOrder;
};

export const searchName = (data, property, inputText) => {
  const searchForName = data.filter((element) => (element[property]).indexOf(inputText) !== -1);
  return searchForName;
};

// funcion devuelve arreglo con los calculos eps y dps
// arrmoves arreglo que recibe los tipos de movimientos
// searchType tipo de pokemon, si es igual al tipo de movimiento aumentar 20%
export const calcMoves = (arrmoves, arrType) => {
  const arrResult = arrmoves.map((element) => {
    let eps = 1;
    let stab;
    let dps = 1;
    const newElement = {};
    if (arrType.indexOf(element.type) !== -1) {
      stab = element['base-damage'] * 1.2;
    } else {
      stab = element['base-damage'] * 1;
    }
    // eslint-disable-next-line operator-assignment
    eps = (element.energy / element['move-duration-seg']) * eps;
    // eslint-disable-next-line operator-assignment
    dps = (stab / element['move-duration-seg']) * dps;
    newElement.eps = eps;
    newElement.dps = dps;
    return newElement;
  });
  return arrResult;
};
