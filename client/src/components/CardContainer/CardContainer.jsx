import Card from '../Card/Card'
import style from "./CardContainer.module.css";

const CardContainer = ({pokemons}) => {
  return (
    <div className={style.container}>
      {
        pokemons.map(poke => <Card key={poke.id} poke={poke} />)
      }
    </div>
  )
}

export default CardContainer;

