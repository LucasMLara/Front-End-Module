import React from 'react';
import '../pokemon.css';
// import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() { 
    // const { name, type, averageWeight, image} = this.props
    const pikachu = {id: 25,
      name: "Pikachu",
      type: 'Electric',
      averageWeight: {
          value: 6.0,
          measurementUnit: "kg"
      },
      image: "https:cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
      moreInfo: "https:bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
    }
      return(
        <section className="pokemonz">
        <h1>{pikachu.name}</h1>
        <h2>{pikachu.type}</h2>
        <img src = {pikachu.image} alt="Rato Gordo Amarelo"/>
        </section>
          )
  }
}

// Pokemon.PropTypes = {
  // name: PropTypes.string,
  // type: PropTypes.string,
  // averageWeight: PropTypes.number,
  // image: PropTypes.string
// }

export default Pokemon;