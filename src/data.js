// Funcion devuelve texto con primer caracter en mayuscula y el resto minuscula
export const textUpperFirst = (text) => {
  let newtext = '';
  newtext = text.substring(0, 1).toUpperCase() + text.slice(1);
  return newtext;
};

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
  if (sortOrder === 'a-z') {
    newDataOrder = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
  } else if (sortOrder === 'z-a') {
    newDataOrder = data.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      return -1;
    });
  } else if (sortOrder === 'numUp') {
    newDataOrder = data.sort((a, b) => {
      if (a.num > b.num) {
        return 1;
      }
      return -1;
    });
  } else {
    newDataOrder = data.sort((a, b) => {
      if (a.num < b.num) {
        return 1;
      }
      return -1;
    });
  }
  return newDataOrder;
};
