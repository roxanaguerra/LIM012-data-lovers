
export const textUpperFirst = (text) => {
  return text;
};

//filterData funcion para filtrar, recibe parametros data y condition
//devuelve un arreglo con el filtro por tipo
export const filterData = (data, condition) => {
  return data.filter(infoPokemon => infoPokemon.type.indexOf(condition) !== -1);
};

export const sortData = (data, sortBy, sortOrder) => {
  let newDataOrder ;
  if (sortOrder === 'a-z') {
      newDataOrder = data.sort((a,b) => {
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