export const initialFilters = {
  name: ['', false],
  generation: ['', false],
  egg_group: ['', false],
  types: [[], false], //el primer elemento de la tupla es un array de strings
  stats: [
    {
      name: '',
      min: 0,
      max: 0,
    },
    false,
  ],
};
