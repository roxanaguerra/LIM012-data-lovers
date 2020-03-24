
export const textUpperFirst = (text) => {
  return text;
};

// filterData funcion para filtrar, recibe parametros data y condition
// devuelve un arreglo con el filtro por tipo
export const filterData = (data, condition, option) => {
  let arrFilter = [];
  console.log(condition);
  switch (option) {
    // filtro por tipo de pokemon
    case 1: arrFilter = data.filter(infoPokemon => infoPokemon.type.indexOf(condition) !== -1);
      break;
    // filtro por tipo de huevo
    case 2: arrFilter = data.filter(infoPokemon => infoPokemon.egg === condition);
      break;
    // filtro por region
    case 3: arrFilter = data.filter(infoPokemon => infoPokemon.generation.name === condition);
      break;
    default: break;
  }
  return arrFilter;
};

export const sortData = (data, sortBy, sortOrder) => {
  let newDataOrder;
  if (sortOrder === 'a-z') {
    newDataOrder = data.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return -1;
    });
  } else {
    newDataOrder = data.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return -1;
    });
  }
  return newDataOrder;
};