import {
  sortData, filterData, textUpperFirst, searchName,
} from '../src/data.js';

const pokemon = [
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    type: [
      'grass',
      'poison',
    ],
    egg: '2 km',
  },
  {
    num: '002',
    name: 'ivysaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    type: [
      'grass',
      'poison',
    ],
    egg: 'not in eggs',
  },
  {
    num: '003',
    name: 'venusaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    type: [
      'grass',
      'poison',
    ],
    egg: 'not in eggs',
  },
  {
    num: '004',
    name: 'charmander',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    type: [
      'fire',
    ],
    egg: '2 km',
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    type: [
      'fire',
    ],
    egg: 'not in eggs',
  },
  {
    num: '006',
    name: 'charizard',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    type: [
      'fire',
      'flying',
    ],
    egg: 'not in eggs',
  },
  {
    num: '007',
    name: 'squirtle',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    type: [
      'water',
    ],
    egg: '2 km',
  },
  {
    num: '008',
    name: 'wartortle',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    type: [
      'water',
    ],
    egg: 'not in eggs',
  },
  {
    num: '009',
    name: 'blastoise',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    type: [
      'water',
    ],
    egg: 'not in eggs',
  },
  {
    num: '200',
    name: 'misdreavus',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    type: [
      'ghost',
    ],
    egg: '2 km',
  }];
const arrResultWaterNoeggKanto = [
  {
    num: '008',
    name: 'wartortle',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    type: [
      'water',
    ],
    egg: 'not in eggs',
  },
  {
    num: '009',
    name: 'blastoise',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    type: [
      'water',
    ],
    egg: 'not in eggs',
  }];
const arrResultFire2km = [{
  num: '004',
  name: 'charmander',
  generation: {
    num: 'generation i',
    name: 'kanto',
  },
  type: [
    'fire',
  ],
  egg: '2 km',
}];
const arrResultJohto = [{
  num: '200',
  name: 'misdreavus',
  generation: {
    num: 'generation ii',
    name: 'johto',
  },
  type: [
    'ghost',
  ],
  egg: '2 km',
}];
const arrFilterValuesx3 = [{ value: 'water' }, { value: 'not in eggs' }, { value: 'kanto' }];
const arrFilterValuesx2 = [{ value: 'fire' }, { value: '2 km' }, { value: 'all' }];
const arrFilterValuesx1 = [{ value: 'all' }, { value: 'all' }, { value: 'johto' }];
const arrFilterValuesx0 = [{ value: 'all' }, { value: 'all' }, { value: 'all' }];

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns `filterData`', () => {
    expect(filterData(pokemon, arrFilterValuesx3)).toEqual(arrResultWaterNoeggKanto);
  });

  test('Filtro x 2 valores', () => {
    expect(filterData(pokemon, arrFilterValuesx2)).toEqual(arrResultFire2km);
  });

  it('Filtro x 1 valor', () => {
    expect(filterData(pokemon, arrFilterValuesx1)).toEqual(arrResultJohto);
  });

  it('returns `filterData` ningun valor', () => {
    expect(filterData(pokemon, arrFilterValuesx0)).toEqual(pokemon);
  });
});

const listName = [{
  name: 'ivysaur',
},
{
  name: 'bulbasaur',
},
{
  name: 'venusaur',
},
{
  name: 'charmander',
},
{
  name: 'charizard',
},
{
  name: 'squirtle',
},
{
  name: 'wartortle',
},
{
  name: 'blastoise',
},
{
  name: 'misdreavus',
}];
describe('sortData', () => {
  const nameAZ = [{
    name: 'blastoise',
  },
  {
    name: 'bulbasaur',
  },
  {
    name: 'charizard',
  },
  {
    name: 'charmander',
  },
  {
    name: 'ivysaur',
  },
  {
    name: 'misdreavus',
  },
  {
    name: 'squirtle',
  },
  {
    name: 'venusaur',
  },
  {
    name: 'wartortle',
  }];
  const nameZA = [
    {
      name: 'wartortle',
    },
    {
      name: 'venusaur',
    },
    {
      name: 'squirtle',
    },
    {
      name: 'misdreavus',
    },
    {
      name: 'ivysaur',
    },
    {
      name: 'charmander',
    },
    {
      name: 'charizard',
    },
    {
      name: 'bulbasaur',
    },
    {
      name: 'blastoise',
    }];
  const listNum = [{
    num: '003',
  },
  {
    num: '001',
  },
  {
    num: '002',
  },
  {
    num: '004',
  },
  {
    num: '005',
  }];
  const numUp = [{
    num: '001',
  },
  {
    num: '002',
  },
  {
    num: '003',
  },
  {
    num: '004',
  },
  {
    num: '005',
  }];
  const numDown = [{
    num: '005',
  },
  {
    num: '004',
  },
  {
    num: '003',
  },
  {
    num: '002',
  },
  {
    num: '001',
  }];
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns `sortData Ascendente`', () => {
    expect(sortData(listName, 'a-z')).toEqual(nameAZ);
  });
  it('returns `sortData Descendente`', () => {
    expect(sortData(listName, 'z-a')).toEqual(nameZA);
  });
  it('returns `sortData NumUp`', () => {
    expect(sortData(listNum, 'numUp')).toEqual(numUp);
  });
  it('returns `sortData NumDown`', () => {
    expect(sortData(listNum, 'numDown')).toEqual(numDown);
  });
});

describe('textUpperFirst', () => {
  it('is a function', () => {
    expect(typeof textUpperFirst).toBe('function');
  });

  it('returns `Roxana` para `roxana`', () => {
    expect(textUpperFirst('roxana')).toEqual('Roxana');
  });
  it('returns `PIKACHU` para `PIKACHU`', () => {
    expect(textUpperFirst('PIKACHU')).toEqual('PIKACHU');
  });
  it('returns `Gloom` para `Gloom`', () => {
    expect(textUpperFirst('Gloom')).toEqual('Gloom');
  });
  it('returns (vacio)`-` para (vacio)`-`', () => {
    expect(textUpperFirst('')).toEqual('');
  });
});

const nameFilter = [
  {
    name: 'venusaur',
  },
  {
    name: 'misdreavus',
  },
  {
    name: 'ivysaur',
  },
];
describe('searchName', () => {
  it('is a function', () => {
    expect(typeof searchName).toBe('function');
  });

  it('returns un array de objetos que contenga la letra `v`', () => {
    expect(searchName(listName, 'name', 'v')).toEqual(nameFilter);
  });
});

// const quickMove = [
//   {
//     name: 'razor leaf',
//     type: 'grass',
//     'base-damage': 13,
//     energy: 7,
//     'move-duration-seg': 1,
//     dps: 13,
//   },
//   {
//     name: 'acid',
//     type: 'poison',
//     'base-damage': 9,
//     energy: 8,
//     'move-duration-seg': 0.8,
//     dps: 11.25,
//   }];
// const infoType = [{
//   type: 'grass',
// },
// {
//   type: 'poison',
// }];
// const calcEpsDps = [{
//   eps: 7,
//   dps: 13,
// },
// {
//   eps: 10,
//   dps: 11.25,
// }];
describe('calcMoves', () => {
  it('is a function', () => {
    expect(typeof calcMoves).toBe('function');
  });

  // it('returns un array con datos: eps y dps', () => {
  //   expect(calcMoves(quickMove, infoType)).toEqual(calcEpsDps);
  // });
});