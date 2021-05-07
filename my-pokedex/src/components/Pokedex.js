import { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    
    return (  <section>
            {pokemons.map((pokemaum)=>{
              return <Pokemon name={pokemaum.name} type={pokemaum.type} averageWeight={pokemaum.averageWeight.value} measurementUnit={pokemaum.averageWeight.measurementUnit} image={pokemaum.image} alt={pokemaum.name}/>
            }

)}
              </section>
    )
  }
}


export default Pokedex;

