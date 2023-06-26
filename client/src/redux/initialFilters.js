export const initialFilters = {
  name: ['', false],
  generation: ['', false],
  egg_group: ['', false],
  type: ['', false], //el primer elemento de la tupla es un array de strings
  subtype: ['', false], //el primer elemento de la tupla es un array de strings
  stats: [
    {
      name: '',
      min: 0,
      max: 0,
    },
    false,
  ],
  sort: ['', false]
};