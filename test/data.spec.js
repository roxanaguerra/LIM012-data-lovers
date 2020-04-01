import { textUpperFirst, filterData, sortData } from '../src/data.js';

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

describe('textUpperFirst', () => {
  it('is a function', () => {
    expect(typeof textUpperFirst).toBe('function');
  });

  it('returns `textUpperFirst`', () => {
    expect(textUpperFirst('pikachu')).toBe('Pikachu');
  });
});

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

describe('sortData', () => {
  const listName = [{
    name: 'bulbasaur',
  },
  {
    name: 'ivysaur',
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
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns `sortData Ascendente`', () => {
    expect(sortData(listName, 'a-z')).toEqual(nameAZ);
  });
  it('returns `sortData Descendente`', () => {
    expect(sortData(listName, 'z-a')).toEqual(nameZA);
  });
});
