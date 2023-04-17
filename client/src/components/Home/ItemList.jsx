import Card from '../Card/Card'

const ItemList = ({pokemons}) => {
  return (
    <>
      {
        pokemons.map(poke => <Card key={poke.id} poke={poke} />)
      }
    </>
  )
}

export default ItemList;

