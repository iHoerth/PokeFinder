export const calculateMaxPages = (allPoke, pokePerPage, pages) => {
  for (let i = 1; i <= Math.ceil(allPoke.length / pokePerPage); i++) {
    pages.push(i);
  }
};
