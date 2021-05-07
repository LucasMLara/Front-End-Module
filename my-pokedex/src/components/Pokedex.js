import { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    
    return (  <section>
            {pokemons.map((pokemaum)=>{
              return <Pokemon {...pokemaum}/>
            }

)}
              </section>
    )
  }
}


export default Pokedex;

