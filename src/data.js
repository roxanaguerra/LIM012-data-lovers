
export const textUpperFirst = (text) => {
  return text;
};

// filterData funcion para filtrar, recibe parametros data y condition
// devuelve un arreglo con el filtro por tipo
export const filterData = (data, condition) => {
  return data.filter(infoPokemon => infoPokemon.type.indexOf(condition) !== -1);
};
